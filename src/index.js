import { fromEvent } from "rxjs";
import { take, switchMap, map, pairwise, takeUntil } from "rxjs/operators";

const start = document.getElementById("start");
const canvas = document.getElementById("canvas");

fromEvent(start, "click")
  .pipe(take(2))
  .subscribe({
    next: e => console.log(e),
    complete: () => console.log("Complete")
  });

// const mouseDown$ = fromEvent(canvas, "mousedown");
// const mouseMove$ = fromEvent(canvas, "mousemove");
// const mouseUp$ = fromEvent(canvas, "mouseup");

// mouseDown$
//   .pipe(
//     switchMap(options =>
//       mouseMove$.pipe(
//         map(e => ({
//           ctx: e.target.getContext("2d"),
//           x: e.offsetX,
//           y: e.offsetY
//         })),
//         pairwise(),
//         takeUntil(mouseUp$)
//       )
//     )
//   )
//   .subscribe(pair => {
//     const [from, to] = pair;
//     const ctx = from.ctx;

//     ctx.beginPath();
//     ctx.moveTo(from.x, from.y);
//     ctx.lineTo(to.x, to.y);
//     ctx.stroke();
//   });
