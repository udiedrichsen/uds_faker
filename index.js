var _ = require('lodash');
var faker = require('faker');

function fakerSwitch(cmd) {
  switch (cmd) {
    case "@address.zipCode": return faker.address.zipCode();
    case "@address.city": return faker.address.city();
    case "@address.cityPrefix": return faker.address.cityPrefix();
    case "@address.citySuffix": return faker.address.citySuffix();
    case "@address.streetName": return faker.address.streetName();
    case "@address.streetAddress": return faker.address.streetAddress();
    case "@address.streetSuffix": return faker.address.streetSuffix();
    case "@address.streetPrefix": return faker.address.streetPrefix();
    case "@address.secondaryAddress": return faker.address.secondaryAddress();
    case "@address.county": return faker.address.county();
    case "@address.country": return faker.address.country();
    case "@address.countryCode": return faker.address.countryCode();
    case "@address.state": return faker.address.state();
    case "@address.stateAbbr": return faker.address.stateAbbr();
    case "@address.latitude": return faker.address.latitude();
    case "@address.longitude": return faker.address.longitude();
    case "@random.number": return faker.random.number();
    case "@random.arrayElement": return faker.random.arrayElement();
    case "@random.objectElement": return faker.random.objectElement();
    case "@random.uuid": return faker.random.uuid();
    case "@random.boolean": return faker.random.boolean();
    case "@random.word": return faker.random.word();
    case "@random.words": return faker.random.words();
    case "@random.image": return faker.random.image();
    case "@random.locale": return faker.random.locale();
    case "@random.alphaNumeric": return faker.random.alphaNumeric();
    case "@commerce.color": return faker.commerce.color();
    case "@commerce.department": return faker.commerce.department();
    case "@commerce.productName": return faker.commerce.productName();
    case "@commerce.price": return faker.commerce.price();
    case "@commerce.productAdjective": return faker.commerce.productAdjective();
    case "@commerce.productMaterial": return faker.commerce.productMaterial();
    case "@commerce.product": return faker.commerce.product();
    case "@company.suffixes": return faker.company.suffixes();
    case "@company.companyName": return faker.company.companyName();
    case "@company.companySuffix": return faker.company.companySuffix();
    case "@company.catchPhrase": return faker.company.catchPhrase();
    case "@company.bs": return faker.company.bs();
    case "@company.catchPhraseAdjective": return faker.company.catchPhraseAdjective();
    case "@company.catchPhraseDescriptor": return faker.company.catchPhraseDescriptor();
    case "@company.catchPhraseNoun": return faker.company.catchPhraseNoun();
    case "@company.bsAdjective": return faker.company.bsAdjective();
    case "@company.bsBuzz": return faker.company.bsBuzz();
    case "@company.bsNoun": return faker.company.bsNoun();
    case "@date.past": return faker.date.past();
    case "@date.future": return faker.date.future();
    case "@date.between": return faker.date.between();
    case "@date.recent": return faker.date.recent();
    case "@date.month": return faker.date.month();
    case "@date.weekday": return faker.date.weekday();
    case "@finance.account": return faker.finance.account();
    case "@finance.accountName": return faker.finance.accountName();
    case "@finance.mask": return faker.finance.mask();
    case "@finance.amount": return faker.finance.amount();
    case "@finance.transactionType": return faker.finance.transactionType();
    case "@finance.currencyCode": return faker.finance.currencyCode();
    case "@finance.currencyName": return faker.finance.currencyName();
    case "@finance.currencySymbol": return faker.finance.currencySymbol();
    case "@finance.bitcoinAddress": return faker.finance.bitcoinAddress();
    case "@hacker.abbreviation": return faker.hacker.abbreviation();
    case "@hacker.adjective": return faker.hacker.adjective();
    case "@hacker.noun": return faker.hacker.noun();
    case "@hacker.verb": return faker.hacker.verb();
    case "@hacker.ingverb": return faker.hacker.ingverb();
    case "@hacker.phrase": return faker.hacker.phrase();
    case "@helpers.randomize": return faker.helpers.randomize();
    case "@helpers.slugify": return faker.helpers.slugify();
    case "@helpers.replaceSymbolWithNumber": return faker.helpers.replaceSymbolWithNumber();
    case "@helpers.replaceSymbols": return faker.helpers.replaceSymbols();
    case "@helpers.shuffle": return faker.helpers.shuffle();
    case "@helpers.mustache": return faker.helpers.mustache();
    case "@helpers.createCard": return faker.helpers.createCard();
    case "@helpers.contextualCard": return faker.helpers.contextualCard();
    case "@helpers.userCard": return faker.helpers.userCard();
    case "@helpers.createTransaction": return faker.helpers.createTransaction();
    case "@image.image": return faker.image.image();
    case "@image.avatar": return faker.image.avatar();
    case "@image.imageUrl": return faker.image.imageUrl();
    case "@image.abstract": return faker.image.abstract();
    case "@image.animals": return faker.image.animals();
    case "@image.business": return faker.image.business();
    case "@image.cats": return faker.image.cats();
    case "@image.city": return faker.image.city();
    case "@image.food": return faker.image.food();
    case "@image.nightlife": return faker.image.nightlife();
    case "@image.fashion": return faker.image.fashion();
    case "@image.people": return faker.image.people();
    case "@image.nature": return faker.image.nature();
    case "@image.sports": return faker.image.sports();
    case "@image.technics": return faker.image.technics();
    case "@image.transport": return faker.image.transport();
    case "@internet.avatar": return faker.internet.avatar();
    case "@internet.email": return faker.internet.email();
    case "@internet.exampleEmail": return faker.internet.exampleEmail();
    case "@internet.userName": return faker.internet.userName();
    case "@internet.protocol": return faker.internet.protocol();
    case "@internet.url": return faker.internet.url();
    case "@internet.domainName": return faker.internet.domainName();
    case "@internet.domainSuffix": return faker.internet.domainSuffix();
    case "@internet.domainWord": return faker.internet.domainWord();
    case "@internet.ip": return faker.internet.ip();
    case "@internet.userAgent": return faker.internet.userAgent();
    case "@internet.color": return faker.internet.color();
    case "@internet.mac": return faker.internet.mac();
    case "@internet.password": return faker.internet.password();
    case "@lorem.word": return faker.lorem.word();
    case "@lorem.words": return faker.lorem.words();
    case "@lorem.sentence": return faker.lorem.sentence();
    case "@lorem.sentences": return faker.lorem.sentences();
    case "@lorem.paragraph": return faker.lorem.paragraph();
    case "@lorem.paragraphs": return faker.lorem.paragraphs();
    case "@lorem.text": return faker.lorem.text();
    case "@lorem.lines": return faker.lorem.lines();
    case "@name.firstName": return faker.name.firstName();
    case "@name.lastName": return faker.name.lastName();
    case "@name.findName": return faker.name.findName();
    case "@name.jobTitle": return faker.name.jobTitle();
    case "@name.prefix": return faker.name.prefix();
    case "@name.suffix": return faker.name.suffix();
    case "@name.title": return faker.name.title();
    case "@name.jobDescriptor": return faker.name.jobDescriptor();
    case "@name.jobArea": return faker.name.jobArea();
    case "@name.jobType": return faker.name.jobType();
    case "@phone.phoneNumber": return faker.phone.phoneNumber();
    case "@phone.phoneNumberFormat": return faker.phone.phoneNumberFormat();
    case "@phone.phoneFormats": return faker.phone.phoneFormats();
    case "@random.number": return faker.random.number();
    case "@random.arrayElement": return faker.random.arrayElement();
    case "@random.objectElement": return faker.random.objectElement();
    case "@random.uuid": return faker.random.uuid();
    case "@random.boolean": return faker.random.boolean();
    case "@random.word": return faker.random.word();
    case "@random.words": return faker.random.words();
    case "@random.image": return faker.random.image();
    case "@random.locale": return faker.random.locale();
    case "@random.alphaNumeric": return faker.random.alphaNumeric();
    case "@system.fileName": return faker.system.fileName();
    case "@system.commonFileName": return faker.system.commonFileName();
    case "@system.mimeType": return faker.system.mimeType();
    case "@system.commonFileType": return faker.system.commonFileType();
    case "@system.commonFileExt": return faker.system.commonFileExt();
    case "@system.fileType": return faker.system.fileType();
    case "@system.fileExt": return faker.system.fileExt();
    case "@system.directoryPath": return faker.system.directoryPath();
    case "@system.filePath": return faker.system.filePath();
    case "@system.semver": return faker.system.semver();
    default:
      return cmd;
  }
}

function transformFakes(r,v,k) {
  if ( _.isObject(v) ) {
    r[k] = _.transform(v,transformFakes);
  } else {
    r[r] = fakerSwitch(v);
  }
}

module.exports = function(object) {
  if ( object ) {
    return _.transform(object,transformFakes);
  } else {
    return object;
  }
};
