import { interval, fromEvent, Observable } from "rxjs";
import { tap, take, switchMap, map, pairwise, takeUntil } from "rxjs/operators";

const start = document.getElementById("start");
