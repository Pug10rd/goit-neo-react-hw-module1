import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className="title">{title}</h2> : ""}

      <ul className={css.statList}>
        {stats.map((item) => (
          <li className={css.item} key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
