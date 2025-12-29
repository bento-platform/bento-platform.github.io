# Bento Platform - GitHub Pages Site

This repository hosts the [Bento Platform](https://bento-platform.github.io) presentation website, built with [Reveal.js](https://revealjs.com/).

## Repository Structure

```
bento-platform.github.io/
├── index.html          # Main presentation file
├── goals.md            # Platform goals and design principles
├── features.md         # Feature descriptions with screenshots
├── releases.md         # Release history and changelogs
├── roadmap.md          # Future planned features
├── img/                # Screenshots and logos
└── reveal.js/          # Presentation framework
```

## Viewing the Presentation

Visit [https://bento-platform.github.io](https://bento-platform.github.io) to view the live presentation.

**Navigation:**
- Use arrow keys or mouse wheel to navigate between slides
- Press `Esc` to see the slide overview
- Press `?` for keyboard shortcuts

## Updating Content

### Adding a New Release

1. Edit `releases.md`:
   - Add the new version at the top with `(current)` marker
   - Remove `(current)` from the previous version
   - Include release date and features

2. Update `roadmap.md`:
   - Remove the released version
   - Add future planned versions if applicable

### Modifying Features or Goals

Edit the respective markdown files:
- `features.md` - Update feature descriptions and screenshots
- `goals.md` - Modify platform goals and principles
- `roadmap.md` - Update upcoming planned features

### Adding Screenshots

1. Place image files in the `img/` directory
2. Reference them in markdown files using the format:
   ```markdown
   ![alt-text](img%2Ffilename.png)
   ```
   Note: Use `%2F` instead of `/` in the image path for Reveal.js compatibility

## Local Development

To view the presentation locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/bento-platform/bento-platform.github.io.git
   cd bento-platform.github.io
   ```

2. Serve the site using a local web server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000

   # Or using Node.js
   npx http-server
   ```

3. Open your browser to `http://localhost:8000`

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

For content updates, please ensure:
- Markdown formatting is consistent
- Screenshots are clear and up-to-date
- Release notes follow the existing format
- Canadian English spelling is used consistently (e.g., "organize", "standardize")

## Links

- **Main GitHub Organization:** [https://github.com/bento-platform](https://github.com/bento-platform)
- **Documentation:** See individual service repositories for detailed documentation

## License

This presentation site is licensed under the [GNU Lesser General Public License v3.0 (LGPL-3.0)](LICENSE). The Bento Platform software components each have their own licenses - see individual repositories for details.

## Contact

For questions or support regarding Bento Platform, please visit the [GitHub organization](https://github.com/bento-platform) or open an issue in the relevant service repository.
