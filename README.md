# Stanford Research Computing

This is the applications and reproducible environment portal provided by Stanford Research Computing for Stanford University, [stanford-rc.github.io](https://stanford-rc.github.io)

## Contributing Content

There are two kinds of content on the site, `posts` and `pages`.

* posts: are considered any kind of tutorial, application sharing, or content that does not fit in the scope of long term documentation. Any markdown file dropped into the `posts` folder, organized into the appropriate subdirectory (category) will be rendered as a post. Where do different categories show up?
  - all: show up on the home page, for users to see new content
  - hpc: is intended for tutorials to show up under the Tutorials -> HPC page
  - web: is intended for web templates and simple applications that will be rendered on the Templates pages.

These categories can be changed and tweaked as needed.

* pages: are considered for documentation that is intended to be read scrolling down the page. We can have many folders of this type, they are called `collections` defined in the [_config.yml](_config.yml) and are rendered into the navigation based on the `number` variable in the front end matter (the header at the top of the markdown file). The numbers in the naming of the files is simply for finding things most easily.
