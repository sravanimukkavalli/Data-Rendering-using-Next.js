import Client from "./clientside";
import Server from "./serverside";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white overflow-y-auto flex flex-col pt-3">
        <h1 className="pt-6 pl-4 text-yellow-800 font-bold font-serif">Client-Side Rendering</h1>
        <div className="flex flex-row px-20">
            <img src="https://cdn.sanity.io/images/ay6gmb6r/production/546482a4bed331a0cc77a57f3b8ba5b3acb879ab-700x393.png?w=729&fm=webp&fit=max&auto=format" className="w-[22rem] h-[14rem] order-[2]" />
            <p className="text-center px-20 pt-5 text-gray-600">Client-side rendering or CSR is a different approach to how the web page is processed for display on the browser. In the CSR, the burden of compiling dynamic content and generate HTML for them is transferred to the client browser.This approach is powered with JavaScript frameworks and libraries like ReactJS, VueJS, and Angular. The normal flow of web page rendering for a client-side rendering scenario follows the below steps:
                The user sends a request to a website (usually via a browser)
                Instead of a Server, a CDN (Content Delivery Network) can be used to serve static HTML, CSS and supporting files to the user
                The browser downloads the HTML and then the JS, meanwhile the user sees a loading symbol
                After the browser fetches the JS, it makes API requests via AJAX to fetch the dynamic content and processes it to render the final content
                After the server responds, the final content is rendered using DOM processing on the client browser
            </p>
        </div>
        <h1 className="pb-3 pt-4 pl-4 text-yellow-800 font-bold font-serif">Server-Side Rendering</h1>
        <div className="flex flex-row px-20">
            <img src="https://cdn.sanity.io/images/ay6gmb6r/production/65dbb3b9d1ed04e945232d80f3de9c015488cab0-700x393.png?w=729&fm=webp&fit=max&auto=format" className="w-[25rem]" />
            <p className="text-center px-20 pt-5 text-gray-600">Server-side rendering or SSR is the conventional way of rendering web pages on the browser. As discussed above, the traditional way of rendering dynamic web content follows the below steps:
                The user sends a request to a website (usually via a browser)
                The server checks the resource, compiles and prepares the HTML content after traversing through server-side scripts lying within the page.
                This compiled HTML is sent to the client’s browser for further rendering and display.
                The browser downloads the HTML and makes the site visible to the end-user
                The browser then downloads the Javascript (JS) and as it executes the JS, it makes the page interactive
            </p>
        </div>
    </div>
  );
}
