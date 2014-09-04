SRC_DIRECTORY=src
DIST_DIRECTORY=dist


all: css js html

clean:
	rm -rf $(DIST_DIRECTORY)

css: .dist
	node_modules/.bin/node-sass --source-map --output-style compressed --include-path node_modules/bootstrap-sass/assets/stylesheets $(SRC_DIRECTORY)/stylesheets/application.scss $(DIST_DIRECTORY)/dashboard.css

js: .dist
	node_modules/.bin/browserify --debug -t [ reactify --harmony ] $(SRC_DIRECTORY)/javascripts/application.jsx -o $(DIST_DIRECTORY)/dashboard.js

html: .dist
	node_modules/.bin/html-minifier --config-file config/html-minifier.json $(SRC_DIRECTORY)/index.html > $(DIST_DIRECTORY)/index.html

server: all
	cd dist && python -m SimpleHTTPServer

.dist:
	mkdir -p $(DIST_DIRECTORY)
