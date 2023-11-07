import { createSpinner } from "./spinner";

function renderTopNews() {
    const articleSection = document.getElementById('topNewsList') 
    createSpinner(articleSection);
}

function renderLatestNews() {
    const latestNewsList = document.querySelector('latest-news-list')
    createSpinner(latestNewsList);
}

document.addEventListener('DOMContentLoaded' , () => {
    renderTopNews();
    renderLatestNews();
})

