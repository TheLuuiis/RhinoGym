import '../css/components/CountUp.css';
import { useEffect, useState, useMemo } from "react";

const CountUp = () => {

  const stats = useMemo(() => [
    { id: 1, value: 35000, label: "Horas de formación" },
    { id: 2, value: 200, label: "Miembros activos" },
    { id: 3, value: 300, label: "Transformaciones" },
    { id: 4, value: 3, label: "Entrenadores certificados" }
  ], []);

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {

    const duration = 2000;
    const steps = duration / 16;

    const interval = setInterval(() => {

      setCounts(prev =>
        prev.map((count, i) => {
          const target = stats[i].value;
          const increment = target / steps;

          if (count < target) {
            return Math.min(Math.ceil(count + increment), target);
          }

          return count;
        })
      );

    }, 16)

    setTimeout(() => clearInterval(interval), duration);
    return () => clearInterval(interval);

  }, [stats])

    return (  
        <div className="stats">
            {stats.map((stat, i) => (
                <div key={stat.id} className="stat">
                    <h2>{counts[i]}<span>+</span></h2>
                    <p>{stat.label}</p>
                </div>
            ))}
        </div>
    );
}
 
export default CountUp;