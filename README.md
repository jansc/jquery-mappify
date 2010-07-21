# Introduction

`jquery-mappify` is a simple jQuery plugin for
[Mappify](http://ws.mappify.org), the RDF to Topic Maps converter.

For more details check out the
[project's homepage]([http://github.com/jansc/jquery-mappify) and take a look at the
[Mappify homepage](http://ws.mappify.org/).


# Getting started

See mappify.html in the examples directory.

The jQuery plugin for mappify provides one function:

   $.mappify(url, urlToMappingFile, callback);

`url` is an IRI which references an RDF source. `urlToMappingFile` is an IRI
of the RDF source with the
[RTM vocabulary](http://www.ontopia.net/topicmaps/materials/rdf2tm.html) or an IRI
to the
[Compact RDF to Topic Maps Mapping Syntax (CRTM)](http://www.semagia.com/tr/crtm/)
mapping file. `callback` is a callback function that is called when the result
from the web service is available.


# Contact

For feedback or if you find any bugs or have comments or feature request
please use the issue tracker at

[project's homepage]([http://github.com/jansc/jquery-mappify)


# Copyright and License

`jquery-mappify` has been written by Jan Schreiber (jans [at] ravn.no). It is
licensed under the MIT license. See the file MIT-LICENSE.txt for details.

