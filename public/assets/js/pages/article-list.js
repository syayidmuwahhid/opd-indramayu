$(document).ready(function () {
    getData(); // get data
});

/**
 * Function to fetch and display article data in the table.
 *
 * @returns {Promise<void>}
 * @throws Will throw an error if the request fails or the response status is not successful.
 */
async function getData() {
    try {
        // Fetch article data from the server
        let data = await getRequestData(`${baseL}/api/article`);
        console.log("ini adalah data article-", data);

        let html = "";
        data.data.forEach((element) => {
            html += `
                <div class="mb-8 md:col-6 lg:col-4">
                    <div class="card">
                        <img class="card-img" width="335" height="210" src="${baseL}/${
                element.image
            }" alt="" />
                        <div class="card-content">
                            <div class="card-tags">
                                <a class="tag" href="#">Development</a>
                            </div>
                            <h3 class="h4 card-title">
                                <a href="${baseL}/article/${element.id}">
                                    ${element.title}
                                </a>
                            </h3>
                            <p>
                            ${element.content}
                            </p>
                            <div class="card-footer mt-6 flex space-x-4">
                                <span class="inline-flex items-center text-xs text-[#666]">
                                    <svg class="mr-1.5" width="14" height="16" viewBox="0 0 14 16"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.5 2H11V0.375C11 0.16875 10.8313 0 10.625 0H9.375C9.16875 0 9 0.16875 9 0.375V2H5V0.375C5 0.16875 4.83125 0 4.625 0H3.375C3.16875 0 3 0.16875 3 0.375V2H1.5C0.671875 2 0 2.67188 0 3.5V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V3.5C14 2.67188 13.3281 2 12.5 2ZM12.3125 14.5H1.6875C1.58438 14.5 1.5 14.4156 1.5 14.3125V5H12.5V14.3125C12.5 14.4156 12.4156 14.5 12.3125 14.5Z"
                                            fill="#939393" />
                                    </svg>
                                    ${convertDate(element.date)}

                                </span>
                                <span class="inline-flex items-center text-xs text-[#666]">
                                    <svg class="mr-1.5" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.65217 0C3.42496 0 0 3.58065 0 8C0 12.4194 3.42496 16 7.65217 16C11.8794 16 15.3043 12.4194 15.3043 8C15.3043 3.58065 11.8794 0 7.65217 0ZM7.65217 14.4516C4.24264 14.4516 1.48107 11.5645 1.48107 8C1.48107 4.43548 4.24264 1.54839 7.65217 1.54839C11.0617 1.54839 13.8233 4.43548 13.8233 8C13.8233 11.5645 11.0617 14.4516 7.65217 14.4516ZM9.55905 11.0839L6.93941 9.09355C6.84376 9.01935 6.78822 8.90323 6.78822 8.78065V3.48387C6.78822 3.27097 6.95484 3.09677 7.15849 3.09677H8.14586C8.34951 3.09677 8.51613 3.27097 8.51613 3.48387V8.05484L10.5773 9.62258C10.7439 9.74839 10.7778 9.99032 10.6575 10.1645L10.0774 11C9.95708 11.171 9.72567 11.2097 9.55905 11.0839Z"
                                            fill="#939393" />
                                    </svg>
                                ${element.user_name}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>`;
        });

        $(`#article-container`).append(html);
    } catch (error) {
        notif("error", "Galat!", error.message);
    }
}
