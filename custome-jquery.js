  const buttons = document.querySelectorAll('.verify-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
			//window.location.href = "https://hamyaran-vps.shop";
            window.location.href = "#Subscription-fee";
        });
    });

   document.querySelectorAll(".subscription-option").forEach(option => {
        option.addEventListener("click", function() {
            var link = this.getAttribute("data-link");
            window.location.href = link;
        });
    });