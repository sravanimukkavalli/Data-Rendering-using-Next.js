export default function Difference() {
    return(
        <div className="flex flex-col w-screen h-screen">
            <h1 className="text-xl text-center text-orange-900">Client-side rendering (CSR) vs. Server-side rendering (SSR) </h1>
            <h3 className="text-lg pl-10 text-gray-500">First page load time</h3>
            <p className="pl-[6rem]">The first page load time is the average time taken when the user loads your website for the first time. On the first load, in CSR, the browser loads base HTML, CSS, and all the scripts required at once and then compile HTML to usable content on the browser.This time usually is more than getting a pre-compiled HTML and the corresponding scripts from the server. Thus, SSR takes lesser time normally when it comes to the first page load time.</p>
            <h3 className="text-lg pl-10 text-gray-500">Impact on SEO</h3>
            <p className="pl-[6rem]">With CSR, the web page content is dynamically generated using JavaScript. This means the change of metadata from one page to another relies on JavaScript execution.
            With SSR, the complete page is compiled with the right metadata and sent to the frontend only after getting the final HTML content. 
                    <br/ >
            This ensures the page metadata is always accurate irrespective of whether the crawler allows the use of JavaScript or not. This makes SSR a better solution to search-engine-optimized pages compared to CSR.
                </p> 
            <h3 className="text-center text-green-900 font-bold">PROs and CONs</h3>
            <p>SERVER-SIDE</p>
            <div className="flex flex-row justify-between px-[20rem]">
                <div className="flex flex-col">
                    <p>PROS</p>
                    <p>1.Search engines can crawl the site for better SEO. <br />
                        2.The initial page load is faster. <br />
                        3.Great for static sites.</p>
                </div>
                <div className="flex flex-col">
                    <p>CONS</p>
                    <p>1.Frequent server requests. <br />
                        2.An overall slow page rendering. <br />
                        3.Full page reloads. <br />
                        4.Non-rich site interactions.</p>
                </div>
            </div>
            <p>CLIENT-SIDE</p>
            <div className="flex flex-row justify-between px-[20rem]">
                <div className="flex flex-col pr-[10rem]">
                    <p>PROS</p>
                    <p>1.Rich site interactions <br />
                        2.Fast website rendering after the initial load. <br />
                        3.Great for web applications.  <br />
                        4.Robust selection of JavaScript libraries.</p>
                </div>
                <div className="flex flex-col pl-[8rem]">
                    <p>CONS</p>
                    <p>1.Low SEO if not implemented correctly. <br />
                        2.Initial load might require more time.  <br />
                        3.In most cases, requires an external library.</p>
                </div>
            </div>
        </div>
    )
}