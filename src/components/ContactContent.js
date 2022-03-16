const generalContact = {
  inputs: [
    {
      label: "Company Name",
      name: "Enter Your Company Name",
      pattern: /^[a-zA-Z]{1,}$/,
      error: "Please enter a valid name",
    },
    // {
    //   label: "Last Name",
    //   name: "Enter Your Last Name",
    //   pattern: /^[a-zA-Z]{1,}$/,
    //   error: "Please enter a valid last name",
    // },

    {
      label: "Email Address",
      name: "you@company.com",
      pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/,
      error: "Please enter a valid email",
    },
    {
      label: "Department Name",
      name: "Enter Your Depart Name",
      pattern: /^[a-zA-Z]{1,}$/,
      error: "Please enter a valid name",
    },
    {
      label: "Phone Number",
      name: "Enter Your Phone Number",
      pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      error: "Please enter a valid phone no.",
    },
    {
      label: "Subject",
      name: "Enter Your Subject",
      pattern: /^[A-Za-z0-9_-\s]{3,40}$/,
      error: "Please enter a subject",
    },
    {
      label: "Message",
      name: "Enter Your Message",
      pattern: /^[A-Za-z0-9_-\s]{10,1000}$/,
      error: "Message should contain more than 10 characters",
    },
  ],
};
const companyContact = {
  inputs: [
    {
      label: "First Name",
      name: "Enter Your First Name",
      pattern: /^[a-zA-Z]{1,}$/,
      error: "Please enter a valid first name",
    },
    {
      label: "Last Name",
      name: "Enter Your Last Name",
      pattern: /^[a-zA-Z]{1,}$/,
      error: "Please enter a valid last name",
    },

    {
      label: "Email",
      name: "Enter Your Email",
      pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/,
      error: "Please enter a valid email",
    },
    {
      label: "Phone Number",
      name: "Enter Your Phone Number",
      pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      error: "Please enter a valid phone no.",
    },
    {
      label: "Subject",
      name: "Enter Your Subject",
      pattern: /^[A-Za-z0-9_-\s]{3,40}$/,
      error: "Please enter a subject",
    },
    {
      label: "Message",
      name: "Enter Your Message",
      pattern: /^[A-Za-z0-9_-\s]{10,1000}$/,
      error: "Message should contain more than 10 characters",
    },
  ],
};
// export default { generalContact, companyContact };
export default generalContact;
