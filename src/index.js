import { fromEvent, Observable } from "rxjs";
import { take, switchMap, map, pairwise, takeUntil } from "rxjs/operators";

const start = document.getElementById("start");
const canvas = document.getElementById("canvas");
