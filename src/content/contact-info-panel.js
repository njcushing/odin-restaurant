const contactInfoPanel = (
    telephoneNumber = "Telephone Number",
    emailAddress = "Email Address",
    houseNumber = "House Number",
    streetName = "Street Name",
    townName = "Town Name",
    cityName = "City Name",
    countryName = "Country Name",
    postcodeValue = "Postcode",
    classes = []
) => {
    const e = document.createElement("div");
    e.classList.add("contact-information-panel");
    classes.forEach((cls) => {
        e.classList.add(cls);
    });

    let house = houseNumber;
    let street = streetName;
    let town = townName;
    let city = cityName;
    let country = countryName;
    let postcode = postcodeValue;

    let eTelephone = document.createElement("div");
    eTelephone.classList.add("contact-information-panel-phone-container");
    e.append(eTelephone);
    let eTelephoneTitle = document.createElement("div");
    eTelephoneTitle.classList.add("contact-information-panel-phone-title");
    eTelephoneTitle.textContent = "Telephone Number: ";
    eTelephone.append(eTelephoneTitle);
    let eTelephoneNumber = document.createElement("div");
    eTelephoneNumber.classList.add("contact-information-panel-phone-number");
    eTelephone.append(eTelephoneNumber);

    let eEmail = document.createElement("div");
    eEmail.classList.add("contact-information-panel-email-container");
    e.append(eEmail);
    let eEmailTitle = document.createElement("div");
    eEmailTitle.classList.add("contact-information-panel-email-title");
    eEmailTitle.textContent = "Email Address: ";
    eEmail.append(eEmailTitle);
    let eEmailAddress = document.createElement("div");
    eEmailAddress.classList.add("contact-information-panel-email-address");
    eEmail.append(eEmailAddress);

    let eAddress = document.createElement("div");
    eAddress.classList.add("contact-information-panel-address-container");
    e.append(eAddress);
    let eAddressTitle = document.createElement("div");
    eAddressTitle.classList.add("contact-information-panel-address-title");
    eAddressTitle.textContent = "Address: ";
    eAddress.append(eAddressTitle);
    let eAddressString = document.createElement("div");
    eAddressString.classList.add("contact-information-panel-address-string");
    eAddress.append(eAddressString);

    const setTelephoneNumber = (str) => {
        eTelephoneNumber.textContent = str;
    };
    setTelephoneNumber(telephoneNumber);
    const setEmailAddress = (str) => {
        eEmailAddress.textContent = str;
    };
    setEmailAddress(emailAddress);
    const setHouseNumber = (str) => {
        house = str;
        updateAddress();
    };
    const setStreetName = (str) => {
        street = str;
        updateAddress();
    };
    const setTownName = (str) => {
        town = str;
        updateAddress();
    };
    const setCityName = (str) => {
        city = str;
        updateAddress();
    };
    const setCountryName = (str) => {
        country = str;
        updateAddress();
    };
    const setPostcode = (str) => {
        postcode = str;
        updateAddress();
    };
    const updateAddress = () => {
        eAddressString.textContent = `${house} ${street}, ${town}, ${city}, ${country}, ${postcode}`;
    };
    updateAddress();

    return {
        e,
        setTelephoneNumber,
        setEmailAddress,
        setHouseNumber,
        setStreetName,
        setTownName,
        setCityName,
        setCountryName,
        setPostcode,
    };
};
export default contactInfoPanel;
