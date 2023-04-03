package be.vdab.beveiligd.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("bestellingen")
class BestellingController {
    @GetMapping("aantal")
    int aantalBestellingen() {
        return 7;
    }
}
