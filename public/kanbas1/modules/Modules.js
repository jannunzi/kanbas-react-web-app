import course from "../course/course.json" assert { type: "json" };

function Modules() {
  return `
  <hr/>
  <div class="float-end">
    <button class="btn btn-secondary">Collapse All</button>
    <button class="btn btn-secondary">View Progress</button>
    <select class="btn btn-secondary">
        <option>Publish All</option>
        <option>Publish all modules and items</option>
        <option>Publish modules only</option>
        <option>Unpublish</option>
    </select>
    <button class="btn btn-danger"><i class="fa fa-plus" aria-hidden="true"></i>
     Module</button>
  </div>
  <br/><br/>
  <hr/>
    <div class="list-group">
    ${course.modules.map(
      (module) => `
    <div class="list-group-item">
        <div class="row">
            <div class="col-9">
                <h5>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    ${module.title}
                </h5>
            </div>
            <div class="col-3">
                <div class="float-end dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Edit</a></li>
                    <li><a class="dropdown-item" href="#">Move Contents ...</a></li>
                    <li><a class="dropdown-item" href="#">Move Module ...</a></li>
                    </ul>
                </div>
                <button class="float-end btn btn-light"><i class="fa fa-plus" aria-hidden="true"></i></button>
                <div class="dropdown float-end">
                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i style="color: green; font-size: 1.5em" class="fa fa-check-circle" aria-hidden="true"></i>
                    </button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Publish module and all items</a></li>
                    <li><a class="dropdown-item" href="#">Publish module only</a></li>
                    <li><a class="dropdown-item" href="#">Unpublish module</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
    )}
</div>
    `;
}

export default Modules;
