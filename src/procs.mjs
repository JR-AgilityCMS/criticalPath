import {parseXpaths, getDriver, getElement} from "./util.mjs";
import dotenv from "dotenv";

dotenv.config();

const xpaths = parseXpaths(process.env.XPATH_FILENAME);
const driver = await getDriver(process.env.BROWSER, parseInt(process.env.IMPLICIT_WAIT));

export const login = async (email, password) => {
    await driver.get(process.env.MANAGER_URL);

    let emailInput = await getElement(driver, xpaths["login-email-input"]);
    let passwordInput = await getElement(driver, xpaths["login-password-input"]);
    let loginButton = await getElement(driver, xpaths["login-button"]);

    await emailInput.sendKeys(email);
    await passwordInput.sendKeys(password);
    await loginButton.click();
}





