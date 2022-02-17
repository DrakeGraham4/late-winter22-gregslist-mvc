export function getHouseForm() {
    return `<form class="row" onsubmit="app.housesController.createHouse(event)">
            <h3 class="col-12">Create a House</h3>
            <div class="mb-3 col-5">
              <label for="" class="form-label">Bedrooms</label>
              <input required type="text" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="helpId" placeholder="">
            </div>
              <div class="mb-3 col-6">
                <label for="" class="form-label">Bathrooms</label>
                <input required type="text" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="helpId" placeholder="">
               </div>
              <div class="mb-3 col-6">
                <label for="" class="form-label">Square Footage</label>
                <input required type="text" class="form-control" name="sqFootage" id="sqFootage" aria-describedby="helpId" placeholder="">
                </div>
                <div class="mb-3 col-6">
                  <label for="" class="form-label">Year</label>
                  <input required type="text" class="form-control" name="year" id="year" aria-describedby="helpId" placeholder="">
                </div>
                <div class="mb-3 col-6">
                  <label for="" class="form-label">Price</label>
                  <input required type="text" class="form-control" name="price" id="price" aria-describedby="helpId" placeholder="">
                </div>
                <div class="mb-3 col-6">
                  <label for="" class="form-label">Image Url</label>
                  <input required type="text" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="helpId" placeholder="">
                </div>
                <button class="col-4 offset-8 btn btn-success"> Create</button>
          </form>`
}