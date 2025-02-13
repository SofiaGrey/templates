import { el, setChildren } from "redom";

const app = document.querySelector('.app');

// export const createSelect = () => {
// 	// selected - класс котрый скрывает элемент, то есть селектед - выбран, значит скрыт со списка
// 	// is-active -  класс для списка, изначально список скрыт, при нажатии на список - is-active добавялется и списко появляется, а удаляется этот класс при клике на элемент списка
// 	const select = el('div.select');
// 	const selectHead = el('div.select__header');
// 	const selectList = el('ul.select__list');
// 	const listItems = createSelectItem();
// 	let currentSelect = el('span.select__current', listItems[0].textContent);

// 	listItems[0].classList.add('selected');

// 	listItems.forEach(item => {
// 		selectList.append(item);
// 	})

// 	selectHead.addEventListener("click", () => {
// 		selectHead.classList.toggle('is-open');
// 		selectList.classList.toggle('is-active');
// 	});

// 	listItems.forEach(item => {
// 		item.addEventListener('click', (e) => {
// 			currentSelect.textContent = e.target.textContent;
// 			selectList.classList.remove('is-active');
// 			selectHead.classList.remove('is-open');
// 			const prev = selectList.querySelector('.selected');
// 			if (prev) {
// 				prev.classList.remove('selected');
// 			}
// 			e.target.classList.add('selected');
// 		})
// 	})

// 	setChildren(selectHead, [currentSelect]);
// 	setChildren(select, [selectHead, selectList]);
// 	setChildren(app, select);
// }

// export const createSelectItem = () => {
// 	const text = ['По номеру', "По последней транзакции", "По балансу"];
// 	const items = text.map(item => {
// 		const selectItem = el('li.select__item', item);
// 		return selectItem;
// 	})
// 	// const items = [];
// 	// itemText.forEach(item => {
// 	// 	const selectItem = el('li.select__item', item);
// 	// 	items.push(selectItem);
// 	// })
// 	return items;
// }


export const createSelect = () => {
	const select = el('div.select');
	const selectHead = el('div.select__header');
	const selectList = el('li.select__list');
	const itemsList = createSelectItem();
	const currentSelect = el('span.select__current', "Сортировка");

	itemsList.forEach(item => {
		selectList.append(item);
		item.addEventListener('click', (e) => {
			currentSelect.textContent = e.target.textContent;
			selectHead.classList.remove('is-open');
			selectList.classList.remove('is-active');
			selectList.querySelector('.selected')?.classList.remove('selected');
			e.target.classList.add('selected');
		})
	});

	selectHead.addEventListener('click', () => {
		selectHead.classList.toggle('is-open');
		selectList.classList.toggle('is-active');
	});



	setChildren(selectHead, currentSelect);
	setChildren(select, [selectHead, selectList]);
	setChildren(app, select);

}


export const createSelectItem = () => {
	const text = ['По номеру', 'По балансу', 'По последней транзакции'];
	const items = text.map(text => {
		const selectItem = el('li.select__item', text);
		return selectItem;
	})
	return items;
}


document.addEventListener('DOMContentLoaded', () => createSelect());