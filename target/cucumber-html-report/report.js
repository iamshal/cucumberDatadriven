$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/DataDrivenFramework.feature");
formatter.feature({
  "line": 1,
  "name": "Fill a simple form with excel data",
  "description": "",
  "id": "fill-a-simple-form-with-excel-data",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4873228969,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Data driven with excel",
  "description": "",
  "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "click contact us",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I contact the customer service with excel row \"1\" dataset",
  "keyword": "Then "
});
formatter.match({
  "location": "DataDrivenFramework.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 8514000499,
  "status": "passed"
});
formatter.match({
  "location": "DataDrivenFramework.click_contact_us()"
});
formatter.result({
  "duration": 1598002399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "DataDrivenFramework.i_contact_the_customer_service_with_excel_row_dataset(String)"
});
formatter.result({
  "duration": 603191320,
  "status": "passed"
});
formatter.after({
  "duration": 1213315061,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Data driven with excel and data sets",
  "description": "",
  "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click contact us",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I contact the customer service with excel row \"\u003crow_index\u003e\" dataset",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets;",
  "rows": [
    {
      "cells": [
        "row_index"
      ],
      "line": 11,
      "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets;;1"
    },
    {
      "cells": [
        "2"
      ],
      "line": 12,
      "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 13,
      "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5415749030,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Data driven with excel and data sets",
  "description": "",
  "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click contact us",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I contact the customer service with excel row \"2\" dataset",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DataDrivenFramework.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 6758934107,
  "status": "passed"
});
formatter.match({
  "location": "DataDrivenFramework.click_contact_us()"
});
formatter.result({
  "duration": 1795336424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "DataDrivenFramework.i_contact_the_customer_service_with_excel_row_dataset(String)"
});
formatter.result({
  "duration": 496513003,
  "status": "passed"
});
formatter.after({
  "duration": 1228941633,
  "status": "passed"
});
formatter.before({
  "duration": 5858286522,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Data driven with excel and data sets",
  "description": "",
  "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click contact us",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I contact the customer service with excel row \"2\" dataset",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DataDrivenFramework.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 7253136547,
  "status": "passed"
});
formatter.match({
  "location": "DataDrivenFramework.click_contact_us()"
});
formatter.result({
  "duration": 2417068779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "DataDrivenFramework.i_contact_the_customer_service_with_excel_row_dataset(String)"
});
formatter.result({
  "duration": 500373425,
  "status": "passed"
});
formatter.after({
  "duration": 1193747110,
  "status": "passed"
});
});