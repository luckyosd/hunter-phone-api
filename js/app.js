const loadiphone = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayphones(phones);

}
const displayphones = phones => {
    const phonecontainer = document.getElementById('phone-container');
    phonecontainer.textContent = '';
    const showallcontainer = document.getElementById('show-all-container');
    if (phones.lenght > 12) {
        showallcontainer.classList.remove('hidden');
    } else {
        showallcontainer.classList.add('hidden');
    }
    phones = phones.slice(0, 12);

    phones.forEach(phone => {
        console.log(phone);
        const phonecard = document.createElement('div');
        phonecard.classList = `card  bg-base-100 shadow-xl`
        phonecard.innerHTML = `<figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
            </div>`;
        phonecontainer.appendChild(phonecard);
    })
    togglespinner(false);
}
const handler = () => {
    togglespinner(true);
    const searchfield = document.getElementById('search-field');
    const searchText = searchfield.value;
    console.log(searchText);
    loadiphone(searchText);
}
const togglespinner = (isloading) => {
    const spinnerid = document.getElementById('spinner-id');
    if (isloading) {
        spinnerid.classList.remove('hidden');
    } else {
        spinnerid.classList.add('hidden');
    }
}