// Copyright 2008 Google Inc.
// All Rights Reserved.

(function() {
  var results = {"dakota do sul": "US-SD", "\u30a2\u30ea\u30be\u30ca": "US-AZ", "\u5fb7\u514b\u85a9\u65af": "US-TX", "\u4f50\u6cbb\u4e9a\u5dde": "US-GA", "\ub274\uba55\uc2dc\ucf54": "US-NM", "\u5fb7\u62c9\u5a01": "US-DE", "\u963f\u80af\u8272": "US-AR", "\u5bc6\u6b47\u6839\u5dde": "US-MI", "rhode island": "US-RI", "\u7530\u7eb3\u897f\u5dde": "US-TN", "\u83ef\u76db\u9813": "US-WA", "\ucf04\ud130\ud0a4": "US-KY", "\uba54\ub9b4\ub79c\ub4dc": "US-MD", "alasca": "US-AK", "\u30d0\u30fc\u30b8\u30cb\u30a2": "US-VA", "dakota del sur": "US-SD", "\u30df\u30b7\u30b7\u30c3\u30d4": "US-MS", "\u5bbe\u5915\u6cd5\u5c3c\u4e9a\u5dde": "US-PA", "\u30a2\u30a4\u30aa\u30ef": "US-IA", "maine": "US-ME", "\u79d1\u7f85\u62c9\u591a": "US-CO", "\uc624\ud074\ub77c\ud638\ub9c8": "US-OK", "\ub9c8\uc778": "US-ME", "kalifornien": "US-CA", "\u65b0\u58a8\u897f\u54e5": "US-NM", "\u30c6\u30ad\u30b5\u30b9": "US-TX", "\u7dec\u56e0": "US-ME", "\u963f\u62c9\u5df4\u9a6c\u5dde": "US-AL", "\uc568\ub7ec\ubc30\ub9c8": "US-AL", "\ub178\uc2a4\uce90\ub864\ub77c\uc774\ub098": "US-NC", "\u30da\u30f3\u30b7\u30eb\u30d9\u30cb\u30a2": "US-PA", "minnesota": "US-MN", "\u65b0\u7f55\u5e03\u590f": "US-NH", "virg\u00ednia ocidental": "US-WV", "\u7530\u7d0d\u897f": "US-TN", "\u5167\u83ef\u9054": "US-NV", "\u534e\u76db\u987f\u5dde": "US-WA", "\u7d10\u7d04": "US-NY", "puerto rico": "US-PR", "\u5357\u9054\u79d1\u4ed6": "US-SD", "maryland": "US-MD", "carolina do norte": "US-NC", "\u9ebb\u85a9\u8af8\u585e": "US-MA", "texas": "US-TX", "\u30a6\u30a3\u30b9\u30b3\u30f3\u30b7\u30f3": "US-WI", "nova york": "US-NY", "\u30aa\u30cf\u30a4\u30aa": "US-OH", "iowa": "US-IA", "\u30b8\u30e7\u30fc\u30b8\u30a2": "US-GA", "virginie": "US-VA", "michigan": "US-MI", "utah": "US-UT", "\u30a2\u30a4\u30c0\u30db": "US-ID", "\u30ab\u30ea\u30d5\u30a9\u30eb\u30cb\u30a2": "US-CA", "\u7dad\u5409\u5c3c\u4e9e": "US-VA", "\uc0ac\uc6b0\uc2a4\ub2e4\ucf54\ud0c0": "US-SD", "\u5357\u8fbe\u79d1\u4ed6\u5dde": "US-SD", "\uc544\uc774\ub2e4\ud638": "US-ID", "nova jersey": "US-NJ", "\u30df\u30cd\u30bd\u30bf": "US-MN", "californi\u00eb": "US-CA", "\u30b1\u30f3\u30bf\u30c3\u30ad\u30fc": "US-KY", "\uc544\uc774\uc624\uc640": "US-IA", "\ub124\ube0c\ub77c\uc2a4\uce74": "US-NE", "\u9a6c\u91cc\u5170\u5dde": "US-MD", "\u8def\u6613\u65af\u5b89\u90a3": "US-LA", "\u9a6c\u8428\u8bf8\u585e\u5dde": "US-MA", "\u65b0\u6cfd\u897f\u5dde": "US-NJ", "caroline du sud": "US-SC", "\uc544\ub9ac\uc870\ub098": "US-AZ", "hawaii": "US-HI", "\u30b3\u30ed\u30f3\u30d3\u30a2\u7279\u5225\u533a": "US-DC", "district of columbia": "US-DC", "\u5317\u9054\u79d1\u4ed6": "US-ND", "pohjois-dakota": "US-ND", "\u4e9a\u5229\u6851\u90a3\u5dde": "US-AZ", "\u54e5\u502b\u6bd4\u4e9e\u7279\u5340": "US-DC", "dakota du nord": "US-ND", "\ubbf8\ub124\uc18c\ud0c0": "US-MN", "virginia": "US-VA", "\u4e9e\u5229\u6851\u90a3": "US-AZ", "\u5fb7\u514b\u8428\u65af\u5dde": "US-TX", "\u8499\u5927\u62ff\u5dde": "US-MT", "illinois": "US-IL", "carolina del sur": "US-SC", "\u30cb\u30e5\u30fc\u30b8\u30e3\u30fc\u30b8\u30fc": "US-NJ", "\u30b5\u30a6\u30b9\u30c0\u30b3\u30bf": "US-SD", "\u30d5\u30ed\u30ea\u30c0": "US-FL", "oreg\u00f3n": "US-OR", "\uc544\uce78\uc18c": "US-AR", "wisconsin": "US-WI", "\u52a0\u5229\u798f\u5c3c\u4e9a\u5dde": "US-CA", "\uce94\uc0ac\uc2a4": "US-KS", "\uc624\ud558\uc774\uc624": "US-OH", "district de columbia": "US-DC", "\ucf54\ub124\ud2f0\ucef7": "US-CT", "\u582a\u8428\u65af\u5dde": "US-KS", "tennessee": "US-TN", "\uc77c\ub9ac\ub178\uc774": "US-IL", "\u5bc6\u8607\u91cc": "US-MO", "nevada": "US-NV", "l\u00e4nsi-virginia": "US-WV", "\u4fc4\u4ea5\u4fc4\u5dde": "US-OH", "\ub9e4\uc0ac\ucd94\uc138\uce20": "US-MA", "hava\u00ed": "US-HI", "delaware": "US-DE", "\u5bc6\u897f\u897f\u6bd4\u5dde": "US-MS", "\u30a6\u30a7\u30b9\u30c8\u30d0\u30fc\u30b8\u30cb\u30a2": "US-WV", "pohjois-carolina": "US-NC", "virgin islands": "US-VI", "arkansas": "US-AR", "\u30df\u30ba\u30fc\u30ea": "US-MO", "\u4f5b\u7f57\u91cc\u8fbe\u5dde": "US-FL", "nouveau-mexique": "US-NM", "\ub178\uc2a4\ub2e4\ucf54\ud0c0": "US-ND", "\u8def\u6613\u65af\u5b89\u90a3\u5dde": "US-LA", "distrito de col\u00fambia": "US-DC", "carolina del norte": "US-NC", "\u5357\u5361\u7f85\u4f86\u7d0d": "US-SC", "dakota del norte": "US-ND", "\u590f\u5a01\u5937\u5dde": "US-HI", "\ubc84\uc9c0\ub2c8\uc544": "US-VA", "\ub85c\ub4dc\uc544\uc77c\ub79c\ub4dc": "US-RI", "\uc624\ub808\uace4": "US-OR", "\uc6cc\uc2f1\ud134": "US-WA", "\ub274\uc695": "US-NY", "\ub378\ub77c\uc6e8\uc5b4": "US-DE", "\u4f5b\u8499\u7279": "US-VT", "californie": "US-CA", "south carolina": "US-SC", "\u30b3\u30ed\u30e9\u30c9": "US-CO", "south dakota": "US-SD", "california": "US-CA", "new mexico": "US-NM", "\u963f\u80af\u8272\u5dde": "US-AR", "ohio": "US-OH", "\u5f17\u5409\u5c3c\u4e9a\u5dde": "US-VA", "\ubc84\ubaac\ud2b8": "US-VT", "\u4f0a\u5229\u8bfa\u4f0a\u5dde": "US-IL", "\u7279\u62c9\u534e\u5dde": "US-DE", "\u30aa\u30af\u30e9\u30db\u30de": "US-OK", "\u30e1\u30a4\u30f3": "US-ME", "ge\u00f3rgia": "US-GA", "floride": "US-FL", "\u5eb7\u6d85\u72c4\u683c\u5dde": "US-CT", "florida": "US-FL", "alaska": "US-AK", "\u7ebd\u7ea6\u5dde": "US-NY", "\u30ef\u30b7\u30f3\u30c8\u30f3": "US-WA", "\u963f\u62c9\u65af\u52a0\u5dde": "US-AK", "\u4fc4\u4ea5\u4fc4": "US-OH", "montana": "US-MT", "etel\u00e4-dakota": "US-SD", "caroline du nord": "US-NC", "\u8cd3\u5915\u6cd5\u5c3c\u4e9e": "US-PA", "\uc870\uc9c0\uc544": "US-GA", "\u30eb\u30a4\u30b8\u30a2\u30ca": "US-LA", "\u963f\u62c9\u65af\u52a0": "US-AK", "\u5317\u5361\u7f85\u4f86\u7d0d": "US-NC", "\uc54c\ub798\uc2a4\uce74": "US-AK", "\u30a2\u30fc\u30ab\u30f3\u30bd\u30fc": "US-AR", "wyoming": "US-WY", "colorado": "US-CO", "\u5eb7\u4e43\u8fea\u514b": "US-CT", "\u4fc4\u52d2\u5188\u5dde": "US-OR", "guam": "US-GU", "\u5bc6\u82cf\u91cc\u5dde": "US-MO", "washington": "US-WA", "\u660e\u5c3c\u82cf\u8fbe\u5dde": "US-MN", "\u5185\u5e03\u62c9\u65af\u52a0\u5dde": "US-NE", "virg\u00ednia": "US-VA", "\ubaac\ud0dc\ub098": "US-MT", "luisiana": "US-LA", "north carolina": "US-NC", "\u4f0a\u5229\u8afe": "US-IL", "north dakota": "US-ND", "mississippi": "US-MS", "\u30a4\u30f3\u30c7\u30a3\u30a2\u30ca": "US-IN", "\uc6e8\uc2a4\ud2b8\ubc84\uc9c0\ub2c8\uc544": "US-WV", "\u30c6\u30cd\u30b7\u30fc": "US-TN", "new jersey": "US-NJ", "\u72b9\u4ed6\u5dde": "US-UT", "\ucf5c\ub85c\ub77c\ub3c4": "US-CO", "\u7f05\u56e0\u5dde": "US-ME", "fl\u00f3rida": "US-FL", "new york": "US-NY", "\u897f\u7dad\u5409\u5c3c\u4e9e": "US-WV", "west virginia": "US-WV", "louisiane": "US-LA", "indiana": "US-IN", "louisiana": "US-LA", "\u4f5b\u7f85\u91cc\u9054": "US-FL", "\u30df\u30b7\u30ac\u30f3": "US-MI", "\ud14d\uc0ac\uc2a4": "US-TX", "virginie-occidentale": "US-WV", "\u80af\u5854\u57fa\u5dde": "US-KY", "\u30b3\u30cd\u30c1\u30ab\u30c3\u30c8": "US-CT", "virginia occidental": "US-WV", "oregon": "US-OR", "\uc6cc\uc2f1\ud134 dc": "US-DC", "\u30b5\u30a6\u30b9\u30ab\u30ed\u30e9\u30a4\u30ca": "US-SC", "connecticut": "US-CT", "\u30cb\u30e5\u30fc\u30e1\u30ad\u30b7\u30b3": "US-NM", "\u5370\u7b2c\u5b89\u7eb3\u5dde": "US-IN", "\u30ce\u30fc\u30b9\u30c0\u30b3\u30bf": "US-ND", "\ub124\ubc14\ub2e4": "US-NV", "\u30e1\u30ea\u30fc\u30e9\u30f3\u30c9": "US-MD", "\u660e\u5c3c\u8607\u9054": "US-MN", "\u55ac\u6cbb\u4e9e": "US-GA", "\u5370\u7b2c\u5b89\u90a3": "US-IN", "nueva york": "US-NY", "georgia": "US-GA", "\u30cd\u30d0\u30c0": "US-NV", "\u582a\u85a9\u65af": "US-KS", "californien": "US-CA", "american samoa": "US-AS", "kentucky": "US-KY", "\u7f85\u5fb7\u5cf6": "US-RI", "\u590f\u5a01\u5937": "US-HI", "\u54e5\u4f26\u6bd4\u4e9a\u7279\u533a": "US-DC", "\u80af\u5854\u57fa": "US-KY", "nebraska": "US-NE", "new hampshire": "US-NH", "\u99ac\u91cc\u862d": "US-MD", "\u5bc6\u897f\u897f\u6bd4": "US-MS", "\u4f5b\u8499\u7279\u5dde": "US-VT", "dakota do norte": "US-ND", "\u5bc6\u897f\u6839": "US-MI", "\u30de\u30b5\u30c1\u30e5\u30fc\u30bb\u30c3\u30c4": "US-MA", "\ub8e8\uc9c0\uc560\ub098": "US-LA", "\u7231\u5965\u74e6\u5dde": "US-IA", "\u7231\u8fbe\u8377\u5dde": "US-ID", "g\u00e9orgie": "US-GA", "\ud39c\uc2e4\ubc14\ub2c8\uc544": "US-PA", "\u5185\u534e\u8fbe\u5dde": "US-NV", "\u963f\u62c9\u5df4\u99ac": "US-AL", "\u30e6\u30bf": "US-UT", "\ubbf8\uc8fc\ub9ac": "US-MO", "\u30c7\u30e9\u30a6\u30a7\u30a2": "US-DE", "\u4fc4\u514b\u62c9\u4f55\u9a6c\u5dde": "US-OK", "pensilv\u00e2nia": "US-PA", "carolina do sul": "US-SC", "\u52a0\u5229\u798f\u5c3c\u4e9e": "US-CA", "\ud14c\ub124\uc2dc": "US-TN", "\uc778\ub514\uc560\ub098": "US-IN", "\u5967\u52d2\u5d17": "US-OR", "\uc720\ud0c0": "US-UT", "\ubbf8\uc2dc\uac04": "US-MI", "\uc0ac\uc6b0\uc2a4\uce90\ub864\ub77c\uc774\ub098": "US-SC", "\u897f\u5f17\u5409\u5c3c\u4e9a\u5dde": "US-WV", "\u7f57\u5f97\u5c9b\u5dde": "US-RI", "\ud50c\ub85c\ub9ac\ub2e4": "US-FL", "\u30a2\u30e9\u30d0\u30de": "US-AL", "\ud558\uc640\uc774": "US-HI", "\u30ed\u30fc\u30c9\u30a2\u30a4\u30e9\u30f3\u30c9": "US-RI", "\u30a4\u30ea\u30ce\u30a4": "US-IL", "\u5357\u5361\u7f57\u6765\u7eb3\u5dde": "US-SC", "nueva jersey": "US-NJ", "\u30cb\u30e5\u30fc\u30e8\u30fc\u30af": "US-NY", "novo m\u00e9xico": "US-NM", "\u65b0\u58a8\u897f\u54e5\u5dde": "US-NM", "idaho": "US-ID", "\u7d10\u6fa4\u897f": "US-NJ", "\u79d1\u7f57\u62c9\u591a\u5dde": "US-CO", "\u7336\u4ed6": "US-UT", "\u30d0\u30fc\u30e2\u30f3\u30c8": "US-VT", "kansas": "US-KS", "\u30e2\u30f3\u30bf\u30ca": "US-MT", "united states minor outlying islands": "US-UM", "calif\u00f3rnia": "US-CA", "\u8499\u5927\u62ff": "US-MT", "\u30a2\u30e9\u30b9\u30ab": "US-AK", "northern mariana islands": "US-MP", "massachusetts": "US-MA", "\ub274\uc800\uc9c0": "US-NJ", "etel\u00e4-carolina": "US-SC", "\uce98\ub9ac\ud3ec\ub2c8\uc544": "US-CA", "nuevo m\u00e9xico": "US-NM", "\u30ab\u30f3\u30b6\u30b9": "US-KS", "\u611b\u8377\u83ef": "US-IA", "\u30cf\u30ef\u30a4": "US-HI", "vermont": "US-VT", "\u5967\u514b\u62c9\u8377\u99ac": "US-OK", "\u30ef\u30a4\u30aa\u30df\u30f3\u30b0": "US-WY", "dakota du sud": "US-SD", "pennsylvania": "US-PA", "\u30cd\u30d6\u30e9\u30b9\u30ab": "US-NE", "pennsylvanie": "US-PA", "\u30ce\u30fc\u30b9\u30ab\u30ed\u30e9\u30a4\u30ca": "US-NC", "\u5167\u5e03\u62c9\u65af\u52a0": "US-NE", "\u65b0\u7f55\u5e03\u4ec0\u5c14\u5dde": "US-NH", "\u30aa\u30ec\u30b4\u30f3": "US-OR", "\ub274\ud584\ud504\uc154": "US-NH", "\u5317\u5361\u7f57\u6765\u7eb3\u5dde": "US-NC", "arizona": "US-AZ", "missouri": "US-MO", "\ubbf8\uc2dc\uc2dc\ud53c": "US-MS", "\u5317\u8fbe\u79d1\u4ed6\u5dde": "US-ND", "alabama": "US-AL", "\u611b\u9054\u8377": "US-ID", "\u30cb\u30e5\u30fc\u30cf\u30f3\u30d7\u30b7\u30e3\u30fc": "US-NH", "oklahoma": "US-OK"};
  gviz.util.RegionCoder.dictionaryReady('us', results);
})();
