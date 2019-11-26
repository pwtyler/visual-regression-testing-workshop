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

}