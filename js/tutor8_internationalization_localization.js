import * as common  from "./common";

common.out("tutor8_internationalization_localization",1);

////////////////////////////////////////////////////////////////////////
common.out("---- tutor8 Collation",1);
common.out("ref: http://es6-features.org/#Collation");

// in German,  "ä" sorts with "a"
// in Swedish, "ä" sorts after "z"
var list = [ "ä", "a", "z" ]
var l10nDE = new Intl.Collator("de")
var l10nSV = new Intl.Collator("sv")
l10nDE.compare("ä", "z") === -1?common.out("True"):common.out("False");
l10nSV.compare("ä", "z") === +1?common.out("True"):common.out("False");

let printData = `
// in German,  "ä" sorts with "a"
// in Swedish, "ä" sorts after "z"
var list = [ "ä", "a", "z" ]
var l10nDE = new Intl.Collator("de")
var l10nSV = new Intl.Collator("sv")
l10nDE.compare("ä", "z") === -1
l10nSV.compare("ä", "z") === +1
`;
common.out("================================\n " + printData);

////////////////////////////////////////////////////////////////////////
common.out("---- tutor8 Number Formatting",1);
common.out("ref: http://es6-features.org/#NumberFormatting");

var l10nEN = new Intl.NumberFormat("en-US")
var l10nDE = new Intl.NumberFormat("de-DE")
l10nEN.format(1234567.89) === "1,234,567.89"?common.out("True"):common.out("False");
l10nDE.format(1234567.89) === "1.234.567,89"?common.out("True"):common.out("False");

printData = `
var l10nEN = new Intl.NumberFormat("en-US")
var l10nDE = new Intl.NumberFormat("de-DE")
l10nEN.format(1234567.89) === "1,234,567.89"
l10nDE.format(1234567.89) === "1.234.567,89"
`;
common.out("================================\n " + printData);

////////////////////////////////////////////////////////////////////////
common.out("---- tutor8 CurrencyFormatting",1);
common.out("ref: http://es6-features.org/#CurrencyFormatting");

var l10nUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
var l10nGBP = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })
var l10nEUR = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })
l10nUSD.format(100200300.40) === "$100,200,300.40"?common.out("True"):common.out("False");
l10nGBP.format(100200300.40) === "£100,200,300.40"?common.out("True"):common.out("False");
l10nEUR.format(100200300.40) === "100.200.300,40 €"?common.out("True"):common.out("False");
printData = `
var l10nUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
var l10nGBP = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })
var l10nEUR = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })
l10nUSD.format(100200300.40) === "$100,200,300.40"
l10nGBP.format(100200300.40) === "£100,200,300.40"
l10nEUR.format(100200300.40) === "100.200.300,40 €"
`;
common.out("================================\n " + printData);

////////////////////////////////////
common.out("---- tutor8 DateTimeFormatting",1);
common.out("ref: http://es6-features.org/#DateTimeFormatting");

var l10nEN = new Intl.DateTimeFormat("en-US")
var l10nDE = new Intl.DateTimeFormat("de-DE")
l10nEN.format(new Date("2015-01-02")) === "1/2/2015"?common.out("True"):common.out("False");
l10nDE.format(new Date("2015-01-02")) === "2.1.2015"?common.out("True"):common.out("False");
printData = `
var l10nEN = new Intl.DateTimeFormat("en-US")
var l10nDE = new Intl.DateTimeFormat("de-DE")
l10nEN.format(new Date("2015-01-02")) === "1/2/2015"
l10nDE.format(new Date("2015-01-02")) === "2.1.2015"
`;
common.out("================================\n " + printData);
