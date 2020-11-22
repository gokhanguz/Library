package StepDefs;

import Page.BasePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;

public class Hook {
    @Before
    public void setUp(){


    }

    @After
    public void tearDown(Scenario scenario){
//        if(scenario.isFailed()){
//            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
//            scenario.attach(screenshot,"image/png","screenshot");
//
//        }

        Driver.closeDriver();

    }

    @Before("@db")
    public void setUpdb(){

        System.out.println("\tconnecting to database...");
        //create connection to db

    }

    @After("@db")
    public void closeDb(){
        System.out.println("\tdisconnecting to database...");
        //close connection


    }
}
