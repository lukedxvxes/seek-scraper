const jobInfoPerPageQuery = () => {
  function subtractDaysFromDate(date, days) {
    const res = new Date(date);
    res.setDate(res.getDate() - days);
    return res;
  }

  function formatDate(string) {
    let daysAgo = parseInt(string.split("d")[0]);
    return subtractDaysFromDate(new Date(), daysAgo).toISOString();
  }

  const titleElems = document.querySelectorAll('a[data-automation="jobTitle"]');
  const companyElems = document.querySelectorAll(
    'a[data-automation="jobCompany"]'
  );
  const shortDescriptionElems = document.querySelectorAll(
    'span[data-automation="jobShortDescription"]'
  );
  const listingDateElems = document.querySelectorAll(
    'span[data-automation="jobListingDate"]'
  );

  const perPage = parseInt(titleElems.length);

  const jobsArr = [];

  const filterBuzzwords = [
    "c#",
    "c++",
    "support",
    "manager",
    "angular",
    "shopify",
    ".net",
    "wordPress",
    "backend",
    "crm",
    "drupal",
    "java",
    "sitecore",
    "salesforce",
    "cobol",
    "azure",
    "microsoft power platform",
    "tester",
    "designer",
    "andriod",
    "python",
  ];

  for (let i = 0; i < perPage; i++) {
    let jobObject = {
      title: "",
      company: "",
      description: "",
      link: "",
      listedOn: "",
    };

    const title = titleElems[i] && titleElems[i].innerHTML;

    jobObject.title = title;
    jobObject.company = companyElems[i] && companyElems[i].innerHTML;
    jobObject.description =
      shortDescriptionElems[i] && shortDescriptionElems[i].innerText;
    jobObject.link = titleElems[i] && titleElems[i].href;
    jobObject.listedOn =
      listingDateElems[i] && formatDate(listingDateElems[i].innerText);

    jobsArr.push(jobObject);
  }

  return jobsArr;
};

module.exports = jobInfoPerPageQuery;
