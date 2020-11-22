package Page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.ConfigurationReader;
import utilities.Driver;

public class LoginPage extends  BasePage{

    public LoginPage(){

        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "inputEmail")
    public WebElement emailBox;

    @FindBy(id = "inputPassword")
    public WebElement passwordBox;

    @FindBy(xpath = "(//button[@type='submit'])")
    public  WebElement signin;



    public void  login(String role){

        if(role.equals("student")){
            emailBox.sendKeys(ConfigurationReader.get("student_email"));
            passwordBox.sendKeys(ConfigurationReader.get("student_password"));
            signin.click();
        }else{
            emailBox.sendKeys(ConfigurationReader.get("librarian_email"));
            passwordBox.sendKeys(ConfigurationReader.get("librarian_password"));
            signin.click();

        }


    }


}
