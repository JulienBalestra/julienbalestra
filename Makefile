CWD=$(shell pwd)

NODE=$(CWD)/node_modules
DEV=$(NODE)/vue/dist/vue.js
PROD=$(NODE)/vue/dist/vue.min.js
LINK=$(NODE)/vue/dist/link-vue.js

npm:
	npm install

dev: npm
	ln -sv $(DEV) $(LINK)

prod: npm
	ln -sv $(PROD) $(LINK)

clean:
	rm -v $(LINK) || true

fclean:
	rm -rfv $(NODE)

re: fclean npm