'use strict'; /* 厳格にエラーをチェック */

{ /* ローカルスコープ */

// DOM取得
const tabMenus = document.querySelectorAll('.tab__menu-item');
console.log(tabMenus);

// イベント付加
tabMenus.forEach((tabMenu) => {
  tabMenu.addEventListener('click', tabSwitch);
})

// イベントの処理
function tabSwitch(e) {

  // クリックされた要素のデータ属性を取得
  const tabTargetData = e.currentTarget.dataset.tab;

   // クリックされた要素の親要素と、その子要素を取得
   const tabList = e.currentTarget.closest('.tab__menu');
   console.log(tabList);
   const tabItems = tabList.querySelectorAll('.tab__menu-item');
   console.log(tabItems);
 
   // クリックされた要素の親要素の兄弟要素の子要素を取得
   const tabPanelItems = tabList.
   nextElementSibling.querySelectorAll('.tab__panel-box');
   console.log(tabPanelItems);
     // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-active');
  })
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove('is-show');
  })
   // クリックされたmenu要素にis-activeクラスを付加
   e.currentTarget.classList.add('is-active');

   // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
   tabPanelItems.forEach((tabPanelItem) => {
     if (tabPanelItem.dataset.panel ===  tabTargetData) {
       tabPanelItem.classList.add('is-show');
     }
   })

}


}





// 'use strict';

// {
//   const tabMenus = document.querySelectorAll('.tab__menu-item');

//   tabMenus.forEach((tabMenu) => {
//     tabMenu.addEventListener('click', tabSwitch);
//   });

//   function tabSwitch(e) {
//     const tabTargetData = e.currentTarget.dataset.tab;
//     const tabList = e.currentTarget.closest('.tab__menu');
//     const tabItems = tabList.querySelectorAll('.tab__menu-item');
//     const tabPanelItems = tabList.nextElementSibling.querySelectorAll('.tab__panel-box');

//     tabItems.forEach((tabItem) => {
//       tabItem.classList.remove('is-active');
//     });

//     tabPanelItems.forEach((tabPanelItem) => {
//       tabPanelItem.classList.remove('is-show');
//     });

//     e.currentTarget.classList.add('is-active');

//     let defaultPanel = "01"; // デフォルトで表示したいパネルのdata-panel値を指定
//     if (tabTargetData === "02") {
//       defaultPanel = "02"; // もしクリックされたタブが"02"なら、表示するパネルを"02"に変更
//     }

//     tabPanelItems.forEach((tabPanelItem) => {
//       if (tabPanelItem.dataset.panel === defaultPanel) {
//         tabPanelItem.classList.add('is-show');
//       }
//     });
//   }
// }
