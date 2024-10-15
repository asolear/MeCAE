
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Listings
    match /listings/{listing} {
        allow read;
        allow create: if request.auth != null && request.resource.data.imageUrls.size() < 7;
        allow update: if resource.data.userRef == request.auth.uid;
        allow delete: if resource.data.userRef == request.auth.uid;
    }

    // Users
    match /users/{user} {
    	allow read;
    	allow create;
    	allow update: if request.auth.uid == user
    }
  }
}
```

Also, the rules for storage:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read;
      allow write: if
      request.auth != null &&
      request.resource.size < 10 * 1024 * 1024 && //10MB
      request.resource.contentType.matches('image/.*')
    }
  }
}
```

After configuring things above, start the app by running command:

```bash
$ npm start
```
