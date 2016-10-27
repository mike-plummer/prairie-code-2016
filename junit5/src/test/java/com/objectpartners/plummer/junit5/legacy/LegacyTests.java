package com.objectpartners.plummer.junit5.legacy;

import com.objectpartners.plummer.junit5.Application;
import com.objectpartners.plummer.junit5.StatesService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;

@SpringBootTest(classes = { Application.class })
@RunWith(SpringJUnit4ClassRunner.class)
public class LegacyTests {

    @Autowired
    private StatesService statesService;

    @Test
    public void verifyFiftyValuesReturnedByStatesService() {
        assertThat(statesService.getStates(), hasSize(50));
    }
}
