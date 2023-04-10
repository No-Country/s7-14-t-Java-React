package com.main.blog.model.enums;


import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ReasonComplaint {

    REASON1_COMPLAINT("se hace pasar por otra persona"),

    REASON2_COMPLAINT("es posible que sea menor de edad"),

    REASON3_COMPLAINT("me esta acosando"),

    REASON4_COMPLAINT("otro motivo");

    private final String complaint;

}
