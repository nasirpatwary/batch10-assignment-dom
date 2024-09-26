document.getElementById("main-donation-btn").addEventListener("click", function () {
    document.getElementById("card-container").classList.remove("hidden")
})
const donationTab = document.getElementById("main-donation-btn");
const historyTab = document.getElementById("main-history-btn");
        donationTab.addEventListener("click", function () {
        document.getElementById("histoty-section-container").classList.add("hidden")
        donationTab.classList.add("border", "py-1.5", "px-5", "rounded", "text-lg", "font-medium", "bg-[#b4f461]", "text-[#111111]")
        historyTab.removeAttribute("class")
        historyTab.classList.add("border", "py-1.5", "px-5", "rounded", "text-lg", "font-medium", "text-[#111111B3]")
})

historyTab.addEventListener("click", function () {
    document.getElementById("histoty-section-container").classList.remove("hidden")
    document.getElementById("card-container").classList.add("hidden")
    historyTab.classList.add("border", "py-1.5", "px-5", "rounded", "text-lg", "font-medium", "bg-[#b4f461]", "text-[#111111]")
    historyTab.classList.remove("text-gray-500")
    donationTab.removeAttribute("class")
    donationTab.classList.add("border", "py-1.5", "px-5", "rounded", "text-lg", "font-medium", "text-[#111111B3]");

})