import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div>
      <input
        placeholder="Filter Text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className="List">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>

      <p>
        <b>Total Contacts ({filtered.length})</b>
      </p>
    </div>
  );
}

export default List;
