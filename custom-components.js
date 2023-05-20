class IconBubbleElement extends HTMLElement {
    connectedCallback() {
        this.size = this.getAttribute('size');
        this.icon = this.getAttribute('icon');
    
        this.innerHTML = `
        <div class="flex h-${this.size} w-${this.size} items-center justify-center rounded-full bg-slate-800 drop-shadow-lg transition-all delay-75 duration-150 hover:scale-110 hover:drop-shadow-xl">
            <i class="${this.icon} fa-xl text-white"></i>
        </div>`;
    }
}

class TextIconBubbleElement extends HTMLElement {
    connectedCallback() {
        this.title = this.getAttribute('title');
        this.text = this.getAttribute('text');
        this.icon = this.getAttribute('icon');

        this.innerHTML = `
        <div class="flex -translate-x-full items-center gap-6 opacity-0 blur-sm transition-all delay-[200ms] duration-1000">
            <icon-bubble size="16" icon="${this.icon}"></icon-bubble>
            <div>
              <p class="text-xl font-bold">${this.title}</p>
              <p class="text-gray-500">${this.text}</p>
            </div>
        </div>`;
    }
}

class ImageShowcaseElement extends HTMLElement {
    connectedCallback() {        
        this.innerHTML = `
        <div class="group relative aspect-[7/5] w-64">
          <div class="absolute h-1/2 w-1/2 translate-x-1/2 translate-y-1/2 rounded-lg bg-gray-100 transition-transform delay-75 duration-300 ease-in-out group-hover:-translate-y-[65%] group-hover:translate-x-[200%] group-hover:-rotate-[15deg]"></div>
          <div class="absolute h-full w-full -translate-x-4 -rotate-1 rounded-lg bg-gray-900 transition-transform delay-75 duration-300 ease-in-out group-hover:-translate-x-[75%] group-hover:translate-y-[16%] group-hover:-rotate-[24deg]"></div>
          <div class="absolute h-1/2 w-1/2 translate-x-1/2 translate-y-1/2 rounded-lg bg-gray-200 transition-transform delay-75 duration-300 ease-in-out group-hover:translate-x-[250%] group-hover:translate-y-[200%] group-hover:rotate-[10deg]"></div>
          <div class="absolute h-full w-full rotate-2 rounded-lg bg-gray-800 transition-transform delay-75 duration-300 ease-in-out group-hover:-translate-x-[25%] group-hover:translate-y-[8%] group-hover:-rotate-[8deg]"></div>
          <div class="absolute h-1/2 w-1/2 translate-x-1/2 translate-y-1/2 rounded-lg bg-gray-300 transition-transform delay-75 duration-300 ease-in-out group-hover:-translate-x-[150%] group-hover:translate-y-[180%] group-hover:-rotate-[10deg]"></div>
          <div class="absolute h-full w-full -translate-x-1 -rotate-3 rounded-lg bg-gray-700 transition-transform delay-75 duration-300 ease-in-out group-hover:translate-x-[25%] group-hover:translate-y-[8%] group-hover:rotate-[8deg]"></div>
          <div class="absolute h-1/2 w-1/2 translate-x-1/2 translate-y-1/2 rounded-lg bg-gray-400 transition-transform delay-75 duration-300 ease-in-out group-hover:-translate-x-[100%] group-hover:-translate-y-[30%] group-hover:rotate-[10deg]"></div>
          <div class="absolute h-full w-full translate-x-3 translate-y-1 rotate-6 rounded-lg bg-gray-600 transition-transform delay-75 duration-300 ease-in-out group-hover:translate-x-[75%] group-hover:translate-y-[16%] group-hover:rotate-[24deg]"></div>
        </div>`;
    }
}


customElements.define("icon-bubble", IconBubbleElement);
customElements.define("text-icon-bubble", TextIconBubbleElement);
customElements.define("image-showcase", ImageShowcaseElement);