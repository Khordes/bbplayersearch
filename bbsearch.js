//Top Menu Selection
chrome.contextMenus.create({
  title: "Player Search: %s",
  id: "bbtop",
contexts:["selection"]
})

//Sub-menus
chrome.contextMenus.create({
  title: "⚾bbref.com⚾", 
  parentId: "bbtop",
  contexts:["selection"], 
  onclick: search_baseball_reference
});
chrome.contextMenus.create({
  title: "⚾fangraphs.com⚾", 
  parentId: "bbtop",
  contexts:["selection"], 
  onclick: search_fangraphs
});
chrome.contextMenus.create({
  title: "⚾baseballprospectus.com⚾", 
  parentId: "bbtop",
  contexts:["selection"], 
  onclick: search_baseballprospectus
});
chrome.contextMenus.create({
  title: "⚾Search All⚾", 
  parentId: "bbtop",
  contexts:["selection"], 
  onclick: search_all
});

//Search Functions
function search_baseball_reference(query,tab) {
  console.log("Query: " + query.selectionText + " - Seaching bbref...");
  chrome.tabs.create({  
    url: "http://www.baseball-reference.com/pl/player_search.cgi?search=" + query.selectionText
  });
}
function search_fangraphs(query,tab) {
  console.log("Query: " + query.selectionText + " - Seaching fangraphs...");
  chrome.tabs.create({  
    url: "http://www.fangraphs.com/players.aspx?lastname=" + query.selectionText
  });
}
function search_baseballprospectus(query,tab) {
  console.log("Query: " + query.selectionText + " - Seaching bp...");
  chrome.tabs.create({  
    url: "http://www.baseballprospectus.com/player_search.php?search_name=" + query.selectionText
  });
}
function search_all(query,tab) {
  console.log("Query: " + query.selectionText + " - Seaching bbref...");
  chrome.tabs.create({  
    url: "http://www.baseball-reference.com/pl/player_search.cgi?search=" + query.selectionText
  });
  console.log("Query: " + query.selectionText + " - Seaching fangraphs...");
  chrome.tabs.create({  
    url: "http://www.fangraphs.com/players.aspx?lastname=" + query.selectionText
  });
  console.log("Query: " + query.selectionText + " - Seaching bp...");
  chrome.tabs.create({  
    url: "http://www.baseballprospectus.com/player_search.php?search_name=" + query.selectionText
  });
}
