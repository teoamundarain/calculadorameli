document.getElementById("priceCalculator").addEventListener("submit", function (e) {
    e.preventDefault();

    const productPrice = parseFloat(document.getElementById("productPrice").value);
    const listingType = document.getElementById("listingType").value;

    let totalCost = productPrice;
    let breakdownHTML = "<ul>";

    if (productPrice < 10000) {
        totalCost += 300; // Costo fijo
        breakdownHTML += "<li>Costo fijo (menos de $10,000): $300</li>";
    } else {
        totalCost += 1600; // Costo de envío
        breakdownHTML += "<li>Costo de envío (más de $10,000): $1,600</li>";
    }

    if (listingType === "CLASICA") {
        const commissionCLASICA = (14 / 100) * productPrice;
        totalCost += commissionCLASICA;
        breakdownHTML += `<li>Comisión por venta CLASICA (14%): $${commissionCLASICA.toFixed(2)}</li>`;
    } else if (listingType === "CUOTAS") {
        const commissionCUOTAS = (40 / 100) * productPrice; // Cambio del 24% al 26%
        totalCost += commissionCUOTAS;
        breakdownHTML += `<li>Comisión por venta en CUOTAS SIN INTERES (40%): $${commissionCUOTAS.toFixed(2)}</li>`;
    }

    const sirtac = 0.002 * productPrice;
    totalCost += sirtac;
    breakdownHTML += `<li>0.2% SIRTAC: $${sirtac.toFixed(2)}</li>`;

    const iibbCABA = 0.05 * productPrice;
    totalCost += iibbCABA;
    breakdownHTML += `<li>5% IIBB de CABA: $${iibbCABA.toFixed(2)}</li>`;

    const debitosCreditos = 0.006 * productPrice;
    totalCost += debitosCreditos;
    breakdownHTML += `<li>0.6% Débitos y créditos: $${debitosCreditos.toFixed(2)}</li>`;

    if (totalCost < 1000) {
        totalCost = 1000; // Precio mínimo en MercadoLibre
        breakdownHTML += "<li>Precio mínimo en MercadoLibre (1,000)</li>";
    }

    breakdownHTML += "</ul>";

    document.getElementById("result").innerHTML = `<p>El precio en MercadoLibre será: $${totalCost.toFixed(2)}</p>${breakdownHTML}`;
});
