package StepDefs;

import Page.BasePage;
import Page.DashboardPage;
import Page.LoginPage;
import org.junit.Assert;
import utilities.BrowserUtils;
import utilities.ConfigurationReader;
import utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class loginStepDef {

    @Given("User should be able to login page")
    public void user_should_be_able_to_login_page() {

        driver.get(ConfigurationReader.get("url"));
    }

    @When("user login as {string}")
    public void user_login_as(String userType) {
        BrowserUtils.waitFor(2);
      new LoginPage().login(userType);

    }
    @Then("user should be see  {string}")
    public void user_should_be_see(String title) {
        BrowserUtils.waitFor(7);
        System.out.println("new DashboardPage().dashboardTitle.getText() = " + new DashboardPage().dashboardTitle.getText());
        Assert.assertEquals(title,new DashboardPage().dashboardTitle.getText());
        BrowserUtils.waitFor(5);

        //new BasePage().logOut();

    }

}
