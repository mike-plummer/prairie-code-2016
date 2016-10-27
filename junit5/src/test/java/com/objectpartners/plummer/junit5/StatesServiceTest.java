package com.objectpartners.plummer.junit5;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;
import static org.springframework.test.util.AssertionErrors.assertTrue;

public class StatesServiceTest extends ApplicationTest {

    @Autowired
    private StatesService dataBean;

    @Autowired
    private ApplicationProperties properties;

    @BeforeEach
    public void init(DependencyTrackerResolver.DependencyTracker tracker) {}

    @Test
    public void testAutowiring() {
        assertNotNull(dataBean);
    }

    @Nested
    public class states {
        @Nested
        public class whenRetrievingAll {

            private List<String> values;

            @BeforeEach
            public void init() {
                values = dataBean.getStates();
            }

            @Test
            public void shouldReturnFiftyValues() {
                assertEquals(values.size(), 50);
            }

            @Test
            public void shouldReturnAlphabetizedValues() {
                List<String> sortedValues = new ArrayList<>(values);
                Collections.sort(sortedValues);
                assertEquals(values, sortedValues);
            }

            @TestFactory
            public Collection<DynamicTest> shouldReturnAllValuesFromDataset() {
                List<String> allStates = dataBean.getStates();
                return properties.getStates().stream().map(state ->
                        dynamicTest(state, () -> assertTrue("Missing state "+state, allStates.contains(state)))
                ).collect(Collectors.toList());
            }

            @AfterEach
            public void cleanup() {
                values = Collections.emptyList();
            }
        }

        @Nested
        @Tag("inputs")
        public class whenRetrievingByStartingCharacter {
            @Nested
            public class withMatchingValue {

                @Test
                public void shouldReturnMatchingValues() {
                    assertEquals(dataBean.getStatesMatching(Pattern.compile("^a", Pattern.CASE_INSENSITIVE)).size(), 4);
                }

                @Test
                public void shouldReturnSortedValues() {
                    List<String> matches = dataBean.getStatesMatching(Pattern.compile("^a", Pattern.CASE_INSENSITIVE));
                    List<String> sortedMatches = new ArrayList<>(matches);
                    Collections.sort(sortedMatches);
                    assertEquals(sortedMatches, matches);
                }
            }

            @Nested
            public class withNonMatchingValue {
                @Test
                public void shouldReturnEmptyList() {
                    List<String> matches = dataBean.getStatesMatching(Pattern.compile("-"));
                    assertTrue("No matches should be found", matches.isEmpty());
                }
            }

            @Nested
            public class withInvalidValue {
                @Test
                public void shouldThrowError() {
                    assertThrows(IllegalArgumentException.class, () -> dataBean.getStatesMatching(null));
                }
            }
        }
    }
}
