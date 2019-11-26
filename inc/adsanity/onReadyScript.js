module.exports = async (page, scenario, vp) => {

	const gdprAccept = 'button.accept';
	try {
		await page.waitForSelector(gdprAccept, {timeout: 250,visible: true});
		await page.click(gdprAccept);
	} catch (error) {
		console.log("Could not find the GDPR button.");
	}

   // Scroll to the bottom of the page
   await page.evaluate(() => {
       window.scrollBy(0, window.innerHeight);
   });

   // Wait for all network activity to stop
   await waitForNetworkIdle(page, 500, 0);


   async function waitForNetworkIdle(page, timeout, maxInflightRequests = 0) {
       page.on('request', onRequestStarted);
       page.on('requestfinished', onRequestFinished);
       page.on('requestfailed', onRequestFinished);

       let inflight = 0;
       let fulfill;
       let promise = new Promise(x => fulfill = x);
       let timeoutId = setTimeout(onTimeoutDone, timeout);
       return promise;

       function onTimeoutDone() {
           page.removeListener('request', onRequestStarted);
           page.removeListener('requestfinished', onRequestFinished);
           page.removeListener('requestfailed', onRequestFinished);
           fulfill();
       }
       function onRequestStarted() {
           ++inflight;
           if (inflight > maxInflightRequests)
               clearTimeout(timeoutId);
       }

       function onRequestFinished() {
           if (inflight === 0)
               return;
           --inflight;
           if (inflight === maxInflightRequests)
               timeoutId = setTimeout(onTimeoutDone, timeout);
       }
   }

}