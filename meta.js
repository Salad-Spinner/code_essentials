function setDiscription(description) {
  var metaDescription = document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = description;
  document.getElementsByTagName('head')[0].appendChild(metaDescription);
}

function setKeywords(keywords){ {
  var metaKeywords = document.createElement('meta');
  metaKeywords.name = 'keywords';
  metaKeywords.content = keywords;
  document.getElementsByTagName('head')[0].appendChild(metaKeywords);
}

function setViewport(viewport) {
  var metaViewport = document.createElement('meta');
  metaViewport.name = 'viewport';
  metaViewport.content = viewport;
  document.getElementsByTagName('head')[0].appendChild(metaViewport);
}

function setTitle(title) {
  document.title = title
}

function setFavicon(Favicon){
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'icon';
  link.href = Favicon;
  document.getElementsByTagName('head')[0].appendChild(link);
  }

function author(author){
 var metaAuthor = document.createElement('meta');
metaAuthor.name = 'author';
metaAuthor.content = author;
document.getElementsByTagName('head')[0].appendChild(metaAuthor);}

function setVersion(version){
  var metaVersion = document.createElement('meta');
  metaVersion.name = 'version';
  metaVersion.content = version;
  document.getElementsByTagName('head')[0].appendChild(metaVersion);
}

function setLicense(license) {
  var metaLicense = document.createElement('meta');
  metaLicense.name = 'license';
  metaLicense.content = license;
  document.getElementsByTagName('head')[0].appendChild(metaLicense);
}

function setLicenseURL(licenseURL) {
  var metaLicenseURL = document.createElement('meta');
  metaLicenseURL.name = 'license';
  metaLicenseURL.content = licenseURL;
  document.getElementsByTagName('head')[0].appendChild(metaLicenseURL);
}

function setSource(source, sourceURL) {
  var metaSource = document.createElement('meta');
  metaSource.name = 'source';
  metaSource.content = source;
  metaSource.setAttribute('url', sourceURL);
  document.getElementsByTagName('head')[0].appendChild(metaSource);
}

function setStyle(styleURL) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = styleURL;
  document.getElementsByTagName('head')[0].appendChild(link);
}

function setStylesheet(passItOn) {
  setStyle(passItOn)
}

function setScript(scriptURL) {
  var script = document.createElement('script');
  script.src = scriptURL;
  document.body.appendChild(script);
}

/* Call the functions to set the meta tags
setDiscription('My website description');
setKeywords('My website keywords');
setViewport('width=device-width, initial-scale=1.0');
setTitle('My website title');
setFavicon('https://example.com/favicon.ico');
author('My website author');
setVersion('1.0.0');
And so on, and so on... */
