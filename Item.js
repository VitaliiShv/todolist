export const Item = ({ text, isDone }) =>
  `<li class="item">
        <div>
            <input type="checkbox" ${isDone ? "checked" : ""} />
            <span>${text}</span>
        </div>
        <button>x</button>
    </li>`;
