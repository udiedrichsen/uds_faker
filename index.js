'use strict';

var _ = require('lodash');
var faker = require('faker');

function fakerSwitch(cmd) {
  var result = cmd;

  switch (cmd) {
    case  "@address.zipCode":
      result = faker.address.zipCode();
      break;
    case  "@address.city":
      result = faker.address.city();
      break;
    case  "@address.cityPrefix":
      result = faker.address.cityPrefix();
      break;
    case  "@address.citySuffix":
      result = faker.address.citySuffix();
      break;
    case  "@address.streetName":
      result = faker.address.streetName();
      break;
    case  "@address.streetAddress":
      result = faker.address.streetAddress();
      break;
    case  "@address.streetSuffix":
      result = faker.address.streetSuffix();
      break;
    case  "@address.streetPrefix":
      result = faker.address.streetPrefix();
      break;
    case  "@address.secondaryAddress":
      result = faker.address.secondaryAddress();
      break;
    case  "@address.county":
      result = faker.address.county();
      break;
    case  "@address.country":
      result = faker.address.country();
      break;
    case  "@address.countryCode":
      result = faker.address.countryCode();
      break;
    case  "@address.state":
      result = faker.address.state();
      break;
    case  "@address.stateAbbr":
      result = faker.address.stateAbbr();
      break;
    case  "@address.latitude":
      result = faker.address.latitude();
      break;
    case  "@address.longitude":
      result = faker.address.longitude();
      break;
    case  "@commerce.color":
      result = faker.commerce.color();
      break;
    case  "@commerce.department":
      result = faker.commerce.department();
      break;
    case  "@commerce.productName":
      result = faker.commerce.productName();
      break;
    case  "@commerce.price":
      result = faker.commerce.price();
      break;
    case  "@commerce.productAdjective":
      result = faker.commerce.productAdjective();
      break;
    case  "@commerce.productMaterial":
      result = faker.commerce.productMaterial();
      break;
    case  "@commerce.product":
      result = faker.commerce.product();
      break;
    case  "@company.suffixes":
      result = faker.company.suffixes();
      break;
    case  "@company.companyName":
      result = faker.company.companyName();
      break;
    case  "@company.companySuffix":
      result = faker.company.companySuffix();
      break;
    case  "@company.catchPhrase":
      result = faker.company.catchPhrase();
      break;
    case  "@company.bs":
      result = faker.company.bs();
      break;
    case  "@company.catchPhraseAdjective":
      result = faker.company.catchPhraseAdjective();
      break;
    case  "@company.catchPhraseDescriptor":
      result = faker.company.catchPhraseDescriptor();
      break;
    case  "@company.catchPhraseNoun":
      result = faker.company.catchPhraseNoun();
      break;
    case  "@company.bsAdjective":
      result = faker.company.bsAdjective();
      break;
    case  "@company.bsBuzz":
      result = faker.company.bsBuzz();
      break;
    case  "@company.bsNoun":
      result = faker.company.bsNoun();
      break;
    case  "@date.past":
      result = faker.date.past();
      break;
    case  "@date.future":
      result = faker.date.future();
      break;
    case  "@date.between":
      result = faker.date.between();
      break;
    case  "@date.recent":
      result = faker.date.recent();
      break;
    case  "@date.month":
      result = faker.date.month();
      break;
    case  "@date.weekday":
      result = faker.date.weekday();
      break;
    case  "@finance.account":
      result = faker.finance.account();
      break;
    case  "@finance.accountName":
      result = faker.finance.accountName();
      break;
    case  "@finance.mask":
      result = faker.finance.mask();
      break;
    case  "@finance.amount":
      result = faker.finance.amount();
      break;
    case  "@finance.transactionType":
      result = faker.finance.transactionType();
      break;
    case  "@finance.currencyCode":
      result = faker.finance.currencyCode();
      break;
    case  "@finance.currencyName":
      result = faker.finance.currencyName();
      break;
    case  "@finance.currencySymbol":
      result = faker.finance.currencySymbol();
      break;
    case  "@finance.bitcoinAddress":
      result = faker.finance.bitcoinAddress();
      break;
    case  "@hacker.abbreviation":
      result = faker.hacker.abbreviation();
      break;
    case  "@hacker.adjective":
      result = faker.hacker.adjective();
      break;
    case  "@hacker.noun":
      result = faker.hacker.noun();
      break;
    case  "@hacker.verb":
      result = faker.hacker.verb();
      break;
    case  "@hacker.ingverb":
      result = faker.hacker.ingverb();
      break;
    case  "@hacker.phrase":
      result = faker.hacker.phrase();
      break;
    case  "@helpers.randomize":
      result = faker.helpers.randomize();
      break;
    case  "@helpers.slugify":
      result = faker.helpers.slugify();
      break;
    case  "@helpers.replaceSymbolWithNumber":
      result = faker.helpers.replaceSymbolWithNumber();
      break;
    case  "@helpers.replaceSymbols":
      result = faker.helpers.replaceSymbols();
      break;
    case  "@helpers.shuffle":
      result = faker.helpers.shuffle();
      break;
    case  "@helpers.mustache":
      result = faker.helpers.mustache();
      break;
    case  "@helpers.createCard":
      result = faker.helpers.createCard();
      break;
    case  "@helpers.contextualCard":
      result = faker.helpers.contextualCard();
      break;
    case  "@helpers.userCard":
      result = faker.helpers.userCard();
      break;
    case  "@helpers.createTransaction":
      result = faker.helpers.createTransaction();
      break;
    case  "@image.image":
      result = faker.image.image();
      break;
    case  "@image.avatar":
      result = faker.image.avatar();
      break;
    case  "@image.imageUrl":
      result = faker.image.imageUrl();
      break;
    case  "@image.abstract":
      result = faker.image.abstract();
      break;
    case  "@image.animals":
      result = faker.image.animals();
      break;
    case  "@image.business":
      result = faker.image.business();
      break;
    case  "@image.cats":
      result = faker.image.cats();
      break;
    case  "@image.city":
      result = faker.image.city();
      break;
    case  "@image.food":
      result = faker.image.food();
      break;
    case  "@image.nightlife":
      result = faker.image.nightlife();
      break;
    case  "@image.fashion":
      result = faker.image.fashion();
      break;
    case  "@image.people":
      result = faker.image.people();
      break;
    case  "@image.nature":
      result = faker.image.nature();
      break;
    case  "@image.sports":
      result = faker.image.sports();
      break;
    case  "@image.technics":
      result = faker.image.technics();
      break;
    case  "@image.transport":
      result = faker.image.transport();
      break;
    case  "@internet.avatar":
      result = faker.internet.avatar();
      break;
    case  "@internet.email":
      result = faker.internet.email();
      break;
    case  "@internet.exampleEmail":
      result = faker.internet.exampleEmail();
      break;
    case  "@internet.userName":
      result = faker.internet.userName();
      break;
    case  "@internet.protocol":
      result = faker.internet.protocol();
      break;
    case  "@internet.url":
      result = faker.internet.url();
      break;
    case  "@internet.domainName":
      result = faker.internet.domainName();
      break;
    case  "@internet.domainSuffix":
      result = faker.internet.domainSuffix();
      break;
    case  "@internet.domainWord":
      result = faker.internet.domainWord();
      break;
    case  "@internet.ip":
      result = faker.internet.ip();
      break;
    case  "@internet.userAgent":
      result = faker.internet.userAgent();
      break;
    case  "@internet.color":
      result = faker.internet.color();
      break;
    case  "@internet.mac":
      result = faker.internet.mac();
      break;
    case  "@internet.password":
      result = faker.internet.password();
      break;
    case  "@lorem.word":
      result = faker.lorem.word();
      break;
    case  "@lorem.words":
      result = faker.lorem.words();
      break;
    case  "@lorem.sentence":
      result = faker.lorem.sentence();
      break;
    case  "@lorem.sentences":
      result = faker.lorem.sentences();
      break;
    case  "@lorem.paragraph":
      result = faker.lorem.paragraph();
      break;
    case  "@lorem.paragraphs":
      result = faker.lorem.paragraphs();
      break;
    case  "@lorem.text":
      result = faker.lorem.text();
      break;
    case  "@lorem.lines":
      result = faker.lorem.lines();
      break;
    case  "@name.firstName":
      result = faker.name.firstName();
      break;
    case  "@name.lastName":
      result = faker.name.lastName();
      break;
    case  "@name.findName":
      result = faker.name.findName();
      break;
    case  "@name.jobTitle":
      result = faker.name.jobTitle();
      break;
    case  "@name.prefix":
      result = faker.name.prefix();
      break;
    case  "@name.suffix":
      result = faker.name.suffix();
      break;
    case  "@name.title":
      result = faker.name.title();
      break;
    case  "@name.jobDescriptor":
      result = faker.name.jobDescriptor();
      break;
    case  "@name.jobArea":
      result = faker.name.jobArea();
      break;
    case  "@name.jobType":
      result = faker.name.jobType();
      break;
    case  "@phone.phoneNumber":
      result = faker.phone.phoneNumber();
      break;
    case  "@phone.phoneNumberFormat":
      result = faker.phone.phoneNumberFormat();
      break;
    case  "@phone.phoneFormats":
      result = faker.phone.phoneFormats();
      break;
    case  "@random.number":
      result = faker.random.number();
      break;
    case  "@random.arrayElement":
      result = faker.random.arrayElement();
      break;
    case  "@random.objectElement":
      result = faker.random.objectElement();
      break;
    case  "@random.uuid":
      result = faker.random.uuid();
      break;
    case  "@random.boolean":
      result = faker.random.boolean();
      break;
    case  "@random.word":
      result = faker.random.word();
      break;
    case  "@random.words":
      result = faker.random.words();
      break;
    case  "@random.image":
      result = faker.random.image();
      break;
    case  "@random.locale":
      result = faker.random.locale();
      break;
    case  "@random.alphaNumeric":
      result = faker.random.alphaNumeric();
      break;
    case  "@system.fileName":
      result = faker.system.fileName();
      break;
    case  "@system.commonFileName":
      result = faker.system.commonFileName();
      break;
    case  "@system.mimeType":
      result = faker.system.mimeType();
      break;
    case  "@system.commonFileType":
      result = faker.system.commonFileType();
      break;
    case  "@system.commonFileExt":
      result = faker.system.commonFileExt();
      break;
    case  "@system.fileType":
      result = faker.system.fileType();
      break;
    case  "@system.fileExt":
      result = faker.system.fileExt();
      break;
    case  "@system.directoryPath":
      result = faker.system.directoryPath();
      break;
    case  "@system.filePath":
      result = faker.system.filePath();
      break;
    case  "@system.semver":
      result = faker.system.semver();
    default:
      result = cmd;
  }

  return result;
}

function transformFakes(r, v, k) {
  if (_.isObject(v)) {
    r[k] = _.transform(v, transformFakes);
  } else {
    r[k] = fakerSwitch(v);
  }

}

module.exports = function (object,locale) {
  var result = object;

  if (object) {
    if ( locale ) {
      faker.locale = locale;
    } else {
      faker.locale = 'de';
    }

    result = _.cloneDeep(object);
    result = _.transform(result, transformFakes);
  }

  return result;
};
