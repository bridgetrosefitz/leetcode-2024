const video = {
  title: "a sweet video",
  play() {
    console.log(this);
  },
  tags: ["horror", "romance", "sci-fi"],

  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }); // <-- will log undefined ('this' is the window object, and there is no title property on the window object)
  },

  showTags2() {
    this.tags.forEach(tag => {
      console.log(this.title, tag);
    });
  }, // <-- will log the title for the video object
};

function playVideo() {
  console.log(this);
} // <-- this will log the window object

function Video(title) {
  this.title = title;
  console.log(this);
}
