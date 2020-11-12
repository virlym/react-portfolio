import React from "react";

function Project3(props) {
    return (
        <article class="col-lg-6">
            <img src={props.data.imageSized} class="figure-img img-fluid rounded folio-img" id={props.data.unique + "Pic"} alt={props.data.unique + " img"} data-toggle="modal" data-target={"#" + props.data.unique + "Modal"} />
            <figcaption> {props.data.name} </figcaption>
            <aside class="modal fade" id={props.data.unique + "Modal"} tabindex="-1" role="dialog" aria-labelledby={props.data.unique + "ModalLabel"} aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id={props.data.unique + "ModalLabel"}> {props.data.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img src={props.data.image} class="img-fluid rounded" alt={props.data.name + " modal img"} />
                            <p>
                                {props.data.description}
                            </p>
                            <p>
                                GitHub : <a href={props.data.gitHub} target="_blank" rel="noopener noreferrer">link</a>
                            </p>
                            <p>
                                Deployed : <a href={props.data.deployed} target="_blank" rel="noopener noreferrer">link</a>
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </aside>
        </article>
    );
}

export default Project3;