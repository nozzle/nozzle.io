'use strict';

let algolia_config_element = document.querySelector("meta[name='ssp-config-path']");

if (null !== algolia_config_element) {
    let config_path = algolia_config_element.getAttribute("content");
    let algolia_config_url = window.location.origin + config_path + 'algolia.json';
    let algolia_config = '';

// Multilingual?
    let language = document.documentElement.lang.substring(0, 2);
    let is_multilingual = false;

    if (document.getElementsByTagName("link").length) {
        let links = document.getElementsByTagName("link");

        for (const link of links) {
            let language_tag = link.getAttribute("hreflang");

            if ('' !== language_tag && null !== language_tag) {
                is_multilingual = true;
            }
        }
    }

    function loadIndex(callback) {
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', algolia_config_url, false);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    loadIndex(function (response) {
        algolia_config = JSON.parse(response);
    });

    let client = algoliasearch(algolia_config.app_id, algolia_config.api_key)
    let index = client.initIndex(algolia_config.index);

    autocomplete(algolia_config.selector, {hint: false}, [
        {
            source: autocomplete.sources.hits(index, {hitsPerPage: 10}),
            displayKey: 'title',
            templates: {
                suggestion: function (suggestion) {

                    if ('' === suggestion.title) {
                        return;
                    }

                    if (is_multilingual) {
                        if (language !== suggestion.language) {
                            return;
                        }
                    }

                    if (algolia_config.use_excerpt) {
                        return '<a href="' + window.location.origin + suggestion.path + '"><span class="search-result-title">' + suggestion.title + '</span><span class="search-result-excerpt">' + suggestion.excerpt + '</span></a>';
                    } else {
                        return '<a href="' + window.location.origin + suggestion.path + '"><span class="search-result-title">' + suggestion.title + '</span></a>';
                    }
                }
            }
        }
    ])
}

