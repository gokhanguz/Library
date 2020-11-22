$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should be able to login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user login as \"\u003crole\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be see  \"\u003cpage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "role",
        "page"
      ]
    },
    {
      "cells": [
        "student",
        "Books"
      ]
    },
    {
      "cells": [
        "librarian",
        "Dashboard"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User should be able to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.loginStepDef.user_should_be_able_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as \"student\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.loginStepDef.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be see  \"Books\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.loginStepDef.user_should_be_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User should be able to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.loginStepDef.user_should_be_able_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as \"librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.loginStepDef.user_login_as(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#inputEmail\"}\n  (Session info: chrome\u003d87.0.4280.66)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CA9OM3D\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\GKHAN~1\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55755}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c0fdd563535bfb60d69e51dc49716706\n*** Element info: {Using\u003did, value\u003dinputEmail}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat Page.LoginPage.login(LoginPage.java:34)\r\n\tat StepDefs.loginStepDef.user_login_as(loginStepDef.java:23)\r\n\tat ✽.user login as \"librarian\"(file:///C:/Users/Gökhan/IdeaProjects/Library/src/test/resources/features/login.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should be see  \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.loginStepDef.user_should_be_see(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});