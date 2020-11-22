package Page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.BrowserUtils;
import utilities.Driver;

public  class BasePage {


    @FindBy(id="navbarDropdown")
    public WebElement userName;

    @FindBy(css = "[class='dropdown-item']")
    public  WebElement logOutLink;


    public void logOut(){
        BrowserUtils.waitFor(2);
        userName.click();
        logOutLink.click();
    }
}
