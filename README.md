## The goal

The goal is to write a small application that displays avatars of a predefined set of users like this:

    [image1]      [image2]       [image3]        [image4]
    [image5]      [image6]       ...

The problem is that in order to get a user's avatar URL we have to make a GET request to the backend. For example, for the user with ID=2 we request `https://picurl.herokuapp.com/users/2` and receive this JSON response:

    {
    	url: "https://picsum.photos/400/400?image=29"
    }

then we display the image with this returned URL.

(For the user with ID=11 we would request `https://picurl.herokuapp.com/users/11`, and so on)

The app needs to display users with these IDs: 2, 7, 1, 8, 3, 9.

// The actual images are just random stock photos, don't worry about that :)

## Bonus points

These additions are not necessary, do them only if you feel like it:

- The images are 400x400 pixels; can we display them as 80x80 pixels?
- Could we also display them as circles, not squares?

## Sending the code

It's not necessary to send the whole app, just the minimal code, or a Github link, or a codesandbox link (https://codesandbox.io/s/new), or any other way that would be easy for you.
