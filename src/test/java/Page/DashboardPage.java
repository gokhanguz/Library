package Page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class DashboardPage {
    public DashboardPage(){

        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "(//*[@class='title'])[1]")
    public WebElement dashboardTitle;

}
